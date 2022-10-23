import React from "react";
import '../Stylings/Validation.css'

class validationInReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                firstName: "",
                email: "",
                password: "",
                confirmPassword: "",
                mobile: "",
                message: ""
            },
            errors: {
                firstName: "",
                email: "",
                password: "",
                mobile: "",
                confirmPassword: "",
                message: ""
            }
        };
    }

    validate = (name, value) => {
        const { fields } = this.state;
        switch (name) {
            case "firstName":
                if (!value || value.trim() === "") {
                    return "Name is Required";
                } else if (value.length < 6 || value.length > 15) {
                    return "Please fill at least 6 character";
                } else {
                    return "";
                }
            case "email":
                if (!value) {
                    return "Email is Required";
                } else if (
                    !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
                ) {
                    return "Enter a valid email address";
                } else {
                    return "";
                }
            case "mobile":
                if (!value || value.trim() === "") {
                    return "Mobile number is Required";
                } else if (!value.match(/^([987]{1})([0-9]{9})$/)) {
                    return "Enter a valid mobile number.";
                } else {
                    return "";
                }
            case "password":
                if (!value) {
                    return "Password is Required";
                } else if (value.length < 8 || value.length > 15) {
                    return "Please fill at least 8 character";
                } else if (!value.match(/[a-z]/g)) {
                    return "Please enter at least lower character.";
                } else if (!value.match(/[A-Z]/g)) {
                    return "Please enter at least upper character.";
                } else if (!value.match(/[0-9]/g)) {
                    return "Please enter at least one digit.";
                } else {
                    return "";
                }
            case "confirmPassword":
                if (!value) {
                    return "Confirm Password Required";
                } else if (value !== fields.password) {
                    return "New Password and Confirm Password Must be Same";
                } else {
                    return "";
                }
            case "message":
                if (!value) {
                    return "Message is Required";
                } else if (value.length < 20 || value.length > 100) {
                    return "Message should contain 20 characters";
                }
            default: {
                return "";
            }
        }
    };

    handleUserInput = e => {
        this.setState({
            errors: {
                ...this.state.errors,
                [e.target.name]: this.validate(e.target.name, e.target.value)
            },
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        const { fields } = this.state;
        e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
            const error = this.validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            this.setState({ errors: validationErrors });
            return;
        }
        if (fields.firstName && fields.email && fields.password && fields.mobile && fields.message) {
            const data = {
                firstName: fields.firstName,
                email: fields.email,
                password: fields.password,
                mobile: fields.mobile,
                message: fields.message,
            };
            window.alert("subit success", JSON.stringify(data));
            console.log("----data----", data);
        }
    };

    render() {
        const { fields, errors } = this.state;
        return (
            
            <div className="row App" >
                <div style={{marginTop:70,color:'#f85422',marginLeft:-100}}><h2>QUICK CONTACT</h2></div>
                
                <div className="col col-5 " style={{ float:'left'}}>
                    <div className="">
                        <div className="">
                            <div>
                                <div>

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={fields.firstName}
                                        onChange={event => this.handleUserInput(event)}
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <span className="text-danger">{errors.firstName}</span>
                                </div>
                            </div>
                            <div>

                                <input
                                    type="email"
                                    name="email"
                                    value={fields.email}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Email Address"
                                />
                                <div>
                                    <span className="text-danger">{errors.email}</span>
                                </div>
                            </div>
                            <div>

                                <input
                                    name="mobile"
                                    value={fields.mobile}
                                    onChange={event => this.handleUserInput(event)}
                                    placeholder="Phone"
                                    
                                />
                                <div>
                                    <span className="text-danger">{errors.mobile}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col col-7" style={{ float:'left'}}>
                    <div >
                        <textarea placeholder=" Message" name="message" rows="4" cols="60" value={fields.message}
                                        onChange={event => this.handleUserInput(event)}>                           
                        </textarea>
                        <div>
                            <span className="text-danger">{errors.message}</span>
                        </div>
                    </div>
                    
                    <button
                        type="button"
                        className="login-button pointer" style={{backgroundColor:'#f85422',marginLeft:445}}
                        onClick={this.handleSubmit} >
                        Submit
                    </button>
                </div>

            </div>
        );
    }
}
export default validationInReact;



{/* <div>
            
           <input
                                                            type="Password"
                                                            name="password"
                                                            value={fields.password}
                                                            onChange={event => this.handleUserInput(event)}
                                                            placeholder="Password"
                                                            />
                                                            <div>
                                                            <span className="text-danger">{errors.password}</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            
                                                            <input
                                                            type="Password"
                                                            name="confirmPassword"
                                                            value={fields.confirmPassword}
                                                            onChange={event => this.handleUserInput(event)}
                                                            placeholder="confirm Password"
                                                            />
                                                            <div>
                                                            <span className="text-danger">{errors.confirmPassword}</span>
                                                            </div>
                                                        </div> */}