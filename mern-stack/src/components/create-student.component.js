import React from 'react'
import { Form, Button, Input } from 'antd'

export default function createStudent() {
    return (
        <div>
            <Form style={{ padding: '0 25%' }}>
                <Form.Item label='Name'>
                    <Input type="text"/>
                </Form.Item>

                <Form.Item label='Email'>
                    <Input type="email"/>
                </Form.Item>

                <Form.Item label='Roll No'>
                    <Input type="text"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Create Student
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
