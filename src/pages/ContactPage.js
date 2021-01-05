import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends Component {

    state = {
        value: '',
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to us!</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Write your message here..." name="" cols="40" rows="10"/>
                    <button>Submit</button>
                </form>
                <Prompt when={this.state.value} message="The form is empty! Are you sure you want to leave this page?"/>
            </div>
        );
    }
}

export default ContactPage;