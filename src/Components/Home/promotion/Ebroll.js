import React, { Component } from 'react'
import Fade from 'react-reveal/Fade.js'
import FormField from '../../ui/FormField.js';
import { valid } from '../../ui/msc.js'


export default class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter Your Email'
                }
            },
            validation: {
                require: true,
                email: true
            },
            valid: false,
            validationMessage: ''
        }
    }


    changeForm(element) {
        const newformData = { ...this.state.formData }
        const newElement = { ...newformData[element.id] }

        newElement.value = element.evt.target.value

        let validData = valid(newElement)

        console.log(validData)

        newformData[element.id] = newElement;

        this.setState({
            formData: newformData
        })

    }

    submitForm() {

    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formData.email}
                                change={(element) => this.changeForm(element)}
                            />
                            {/* <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}
                            />

                            { this.state.formError ? 
                                <div className="error_label">Something is wrong, try again.</div>
                                :null
                            } */}
                            {/* <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event)=> this.submitForm(event)}>Enroll</button>
                            <div className="enroll_discl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div> */}
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}
