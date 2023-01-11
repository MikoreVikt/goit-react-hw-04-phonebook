import PropTypes from 'prop-types';
import { Component } from "react";
import { Form, Label, Input, Button } from "./ContactForm.styled";

export class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state, this.reset)
    }

    reset = () => {
        this.setState({name: '', number: '',})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>Name 
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>Number 
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button>Add contact</Button>
            </Form>
        )
    }
}
