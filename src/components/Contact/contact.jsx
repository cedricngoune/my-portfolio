import React from "react"
import "./contact.scss"

const FormContact = () => {
    const sendMail = () => {}
    return (
        <div className="section-contact">
            <div className="wrapper-contact">
                <h1 className="section-title">Et si nous prenons contact</h1>
                <div className="box-form-contact">
                    <div className="form-contact">
                        <div className="row">
                            <div className="col-xs-4 col-md-4 col-xl-4">
                                <input
                                    type="text"
                                    name="name"
                                    className="input-name"
                                    placeholder="Votre nom"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="input-email"
                                    placeholder="votre email"
                                />
                            </div>
                        </div>

                        <textarea
                            rows="5"
                            name="message"
                            className="input-textarea"
                            placeholder="Votre message :)"
                        />
                       
                            <button
                                className="btn-send"
                                onClick={() => sendMail}
                            >
                                Envoyer
                            </button>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormContact
