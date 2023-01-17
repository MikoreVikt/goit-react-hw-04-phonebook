import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { nanoid } from "nanoid";
import { Wrapper, Title } from "./App.styled";
import data from '../data.json'

export const App = () => {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('contactsMemory')) ?? data
    })
    const [filter, setFilter] = useState('')
    
    useEffect(() => {
        localStorage.setItem('contactsMemory', JSON.stringify(contacts))
    }, [contacts])

    const handleFilterChange = (e) => {
        setFilter(e.currentTarget.value)
    }

    const addContact = ({name, number}, reset) => { 
        if (checkAvailability(name)) {
            return alert(`${name} is already in contacts`)
        }
        const newContact = {
            id: nanoid(),
            name,
            number,
        }
        setContacts([newContact, ...contacts])
        reset()
    }

    const checkAvailability = name => {
        return contacts.find(contact => contact.name === name)
    }

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    const deleteContact = (id) => {
        setContacts(contacts => contacts.filter(el => el.id !== id))}

    return (
            <Wrapper>
                <Title>Phonebook</Title>
                <ContactForm onSubmit={addContact} />
                <Title>Contacts</Title>
                <ContactFilter value={filter} onChange={handleFilterChange}/>
                <ContactList options={getVisibleContacts()} onDeleteContact={deleteContact} />
            </Wrapper>
    )
}


// ======================================================================================================
// export class oldApp extends Component {
//     state = {
//         contacts: [],
//         filter: '',
//     }

//     componentDidMount() {
        // const contactsMemory = localStorage.getItem('contactsMemory')
        // if (contactsMemory) {
        //     const parsedContactsMemory = JSON.parse(contactsMemory)
        //     this.setState({contacts: parsedContactsMemory})
        // }
//     }

//     componentDidUpdate(_, prevState) {
//         if (this.state.contacts !== prevState.contacts) {
//             localStorage.setItem('contactsMemory', JSON.stringify(this.state.contacts))
//         }
//     }

//     handleInputChange = (e) => {
//         this.setState({[e.currentTarget.name]: e.currentTarget.value})
//     }

    // addContact = ({name, number}, reset) => { 
    //     if (this.checkAvailability(name)) {
    //         return alert(`${name} is already in contacts`)
    //     }
    //     const newContact = {
    //         id: nanoid(),
    //         name,
    //         number,
    //     }
    //     this.setState(({contacts}) => ({
    //         contacts: [newContact, ...contacts]
    //     }))
    //     reset()
    // }
    
    // checkAvailability = name => {
    //     return this.state.contacts.find(contact => contact.name === name)
    // }

    // getVisibleContacts = () => {
    //     const { contacts, filter } = this.state;
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    // }

    // deleteContact = (id) => {
    //     this.setState(prevState => ({
    //         contacts: prevState.contacts.filter(el => el.id !== id),
    //     }))
    // }
    
//     render() {    
    //     return (
    //         <Wrapper>
    //             <Title>Phonebook</Title>
    //             <ContactForm onSubmit={this.addContact} />
    //             <Title>Contacts</Title>
    //             <ContactFilter value={this.state.filter} onChange={this.handleInputChange}/>
    //             <ContactList options={this.getVisibleContacts()} onDeleteContact={this.deleteContact} />
    //         </Wrapper>
    // )}
// }
