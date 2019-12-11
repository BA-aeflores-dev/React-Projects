import React, { useState, useEffect, useContext, useReducer } from 'react'

export default function Counter() {
    const [state, setState] = useState({ count: 0, text:'la cuenta es' });



    return (
        <div>
            { state.text } { state.count }
            <br/>
            <button onClick={ () => { setState({ ...state, count: state.count+1 }) } }>Agregar</button>
        </div>
    )
}
