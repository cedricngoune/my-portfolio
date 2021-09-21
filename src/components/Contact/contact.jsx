import React from "react"
import "./contact.scss"
import {useState} from "react";



const FormContact = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const set = data => {
        return ({target: { value}}) => {
            setValues(oldValues => ({...oldValues, [data]: value}))
        }
    }
    const sendMail = e => {
        e.preventDefault()

        setValues({
            name: '',
            email: '',
            message: ''
        })
    }
    return (
        <div className="section-contact">
            <div className="wrapper-contact">
                <h1 className="section-title">Et si nous prenions contact</h1>
                <div className="box-form-contact">
                    <div className="form-contact">
                        <div className="row">
                            <div className="col-xs-4 col-md-4 col-xl-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    className="input-name"
                                    onChange={set('name')}
                                    placeholder="Votre nom"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={set('email')}
                                    className="input-email"
                                    placeholder="votre email"
                                />
                            </div>
                        </div>

                        <textarea
                            rows="5"
                            name="message"
                            value={values.message}
                            onChange={set('message')}
                            className="input-textarea"
                            placeholder="Votre message :)"
                        />

                        <button className="btn-send" onClick={sendMail}>
                            Envoyer
                        </button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default FormContact
