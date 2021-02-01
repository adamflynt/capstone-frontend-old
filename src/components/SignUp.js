import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import SignUpCard from './SignUpCard';

export default class SignUp extends Component {
    render() {
        return (
            <>
                <SignUpCard />
                <Footer />
            </>
        );
    }
}