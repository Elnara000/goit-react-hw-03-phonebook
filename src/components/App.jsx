import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  //принимает инфу с низов
  formSubmitHandler = data => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts.`);
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          ...contacts,
          {
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteClick = id => {
    this.setState(({ contacts }) => {
      const filteredContacts = contacts.filter(
        contact => contacts.indexOf(contact) !== id
      );
      return {
        contacts: filteredContacts,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onClick={this.onDeleteClick} />
      </div>
    );
  }
}

export default App;
