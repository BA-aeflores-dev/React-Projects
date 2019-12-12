import React, {Fragment, useEffect, useReducer, useState} from "react";
//import ReactDOM from "react-dom";
import uniqid from "uniqid";
//La función reducer recibe como parametro el estado actual y el Action Object del cual se hizo dispatch.
const notesReducer = (state, action) => {
    console.log("Ejecutando el notesReducer");
    switch (action.type) {
        case "SET_NOTES":
            return action.notes;
        case "ADD_NOTE":
            return [...state, action.note];
        case "REMOVE_NOTE":
            return state.filter(note => note.key !== action.key);
        default:
            return state;
    }
};
/*
 * El hook useReducer() nos permite administrar el state de un componente usando la misma logica de la libreria Redux. es decir: haciendo dispatch de un Action Object
 * a una tienda para poder actualizar su contenido.
 *
 * Utilizar el hook useState() esta bien para cuando queremos administrar estados muy sencillos, pero cuando nuestro estado contiene estructuras de datos muy complejas,
 * no se recomienda su uso.
 *
 * El objetivo de utilizar un reducer es separar la logica del componente y la administración del estado. cuando tenemos dentro de nuestros componentes todo el codigo
 * para manipular el state, se hace dificil realizar pruebas unitarias. esto es porque estamos obligados a renderizar el componente y luego disparar los eventos de un control.
 *
 * Tecnicamente hablando es totalmente valido definir una función reducer dentro del componente funcional, sin embargo lo mas recomendado es hacerlo fuera del componente.
 * esto nos va ayudar en un futuro a realizar pruebas unitarias mas facilmente.
 */
const App = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    /*
     * El hook useReducer() requiere 2 parametros:
     * 1. La función que vamos utilizar como reducer, es decir la que contiene la logica de como manipular el state del componente.
     * 2. Un estado inicial.
     *
     * El hook useReducer() retorna un arreglo con 2 elementos:
     * 1. Representa el state actual del componente.
     * 2. Una función que nos permite hacer dispatch hacia el reducer.
     */
    const [notes, dispatch] = useReducer(notesReducer, []);
    //Simulación del metodo componentDidMount()
    useEffect(() => {
        console.log("Se disparo el hook useEffect() con 0 dependencias. en el componente: App");
        const persistedNotes = localStorage.getItem("notes");
        const parsedNotes = JSON.parse(persistedNotes);
        if (parsedNotes !== null && parsedNotes.length > 0) {
            const action = {type: "SET_NOTES", notes: parsedNotes};
            dispatch(action);
        }
    }, []);
    //Simulación del metodo componentDidUpdate()
    useEffect(() => {
        console.log("Se disparo el hook useEffect() con 1 dependencia. en el componente: App");
        console.log("Las notas actuales son: ", notes);
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    //Manejador para cuando se envia el formulario
    const handleFormSubmit = e => {
        e.preventDefault();
        const note = {key: uniqid(), title: noteTitle, body: noteBody};
        const action = {type: "ADD_NOTE", note};
        dispatch(action);
        setNoteTitle("");
        setNoteBody("");
    };
    //Manejador para cuando cambia la caja que representa el titulo de la nota
    const handleTitleChange = e => {
        setNoteTitle(e.target.value);
    };
    //Manejador para cuando cambia la caja que representa el cuerpo de la nota
    const handleBodyChange = e => {
        setNoteBody(e.target.value);
    };
    //Elimina una nota, basado en su llave
    const handleNoteDelete = key => {
        const action = {type: "REMOVE_NOTE", key};
        dispatch(action);
    };
    //Obtiene la lista de notas
    const getNotes = () => {
        return notes.map(note => {
            return (
                <div key={note.key}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => handleNoteDelete(note.key)}>Delete</button>
                </div>
            );
        });
    };
    //JSX que retorna el componente
    return (
        <Fragment>
            <h1>Agregar Notas</h1>
            <form onSubmit={handleFormSubmit} autoComplete="off">
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" id="title" value={noteTitle} onChange={handleTitleChange} required/>
                </div>
                <div className="small-mtop">
                    <label htmlFor="body">Cuerpo:</label>
                    <textarea id="body" value={noteBody} onChange={handleBodyChange} required rows="5"/>
                </div>
                <button type="submit" className="small-mtop">Guardar</button>
            </form>
            <hr/>
            <h2>Notas</h2>
            {getNotes()}
        </Fragment>
    );
};

export default App;
//Renderizamos la aplicación
//ReactDOM.render(<App/>, document.getElementById("root"));