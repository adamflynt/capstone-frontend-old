import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser, updateRegisterStatus } from '../actions/Actions';

import '../styles/Cards.css';


const required = val => val && val.length;
const maxLength = len => {
    return val => !(val) || (val.length <= len);
};
const minLength = len => {
    return (val) => val && (val.length >= len);
}


class SignUpCard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log("Current submit " + JSON.stringify(values));
        this.props.registerUser(values);
    }
    render() {
        return (
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <li className='cards__item'>
                                <div className='cards__item__link'>
                                    <figure className='cards__item__pic-wrap' data-category={'login'}>
                                        <div className='cards__item__info'>
                                            <LocalForm className="page-form" onSubmit={(values) => {
                                                this.handleSubmit(values)
                                            }} >
                                                <h3>Sign Up</h3>
                                                <br />

                                                <div className="form-group">
                                                    <Control.text model=".username" id="username" name="username"
                                                        placeholder="User Name"
                                                        className="form-control"
                                                        validators={{
                                                            required, maxLength: maxLength(30), minLength: minLength(3)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".username"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required\n',
                                                            minLength: 'Must be greater than 2 characters',
                                                            maxLength: 'Must be 30 characters or less'
                                                        }}
                                                    />
                                                </div>
                                                <br />

                                                <div className="form-group">
                                                    <Control.text model=".password" id="password" name="password"
                                                        placeholder="Password"
                                                        className="form-control"
                                                        validators={{
                                                            required, maxLength: maxLength(30), minLength: minLength(3)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".password"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required\n',
                                                            minLength: 'Must be greater than 2 characters',
                                                            maxLength: 'Must be 30 characters or less'
                                                        }}
                                                    />
                                                </div>
                                                <br />

                                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                            </LocalForm>
                                        </div>
                                    </figure>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registerStatus: state.registerStatus
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return {
        registerUser: bindActionCreators(registerUser, dispatch),
        updateRegisterStatus: bindActionCreators(updateRegisterStatus, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);