import axios from "axios";
import { HELLO_NAME_URL } from "../Endpoints";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useRef } from "react";
import { Label } from "reactstrap";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export function HelloNamePage() {
    const [message, setMessage] = useState('');
    const [input, setInput] = useState('');
    const keyboard = useRef();

    const submitForm = (values, actions) => {
        console.log(values);
        axios
            .post(HELLO_NAME_URL, values)
            .then((res) => {
                const {greeting} = res.data;
                setMessage(greeting);
            })
            .catch((errors) => {
                actions.setErrors(errors.response.data);
            });
    }

    const onChange = (input) => {
        setInput(input);
        console.log("Input changed", input);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);
        keyboard.current.setInput(value);
    };

    return (
        <>
            <div className={'mb-4'}>
                {message && (
                    <span className={'mb-4'}>
                        <b>Response: </b><span>{message}</span>
                    </span>
                )}
            </div>
            <Formik
                initialValues={{name: ''}}
                onSubmit={submitForm}
            >
                {({setFieldValue}) => (
                    <Form>
                        <div className={'mb-2'}>
                            <Label className="form-label">Name</Label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Input your name."
                                value={input}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    setFieldValue("name", e.target.value);
                                }}
                            />
                            <ErrorMessage name={'name'} component="div" className={'text-danger form-text'}/>
                        </div>
                        <button type={'submit'} className={'btn btn-primary float-end'}>Submit</button>
                    </Form>
                )}
            </Formik>
            <Keyboard
                keyboardRef={r => (keyboard.current = r)}
                onChange={onChange}
                layoutName="default"
            />
        </>
    );
}