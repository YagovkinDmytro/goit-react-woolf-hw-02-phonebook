import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Section from './Section/Section';
import './Section/section.css';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.createNewContact();
    this.setInitialState();
  };

  handleChange = ({ target: { value, name } }) => {
    if (
      value.includes(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      )
    )
      return;
    if (
      value.includes(
        '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}'
      )
    )
      return;
    this.setState({ [name]: value });
    console.log(value);
    this.filterContacts(this.state.contacts, value);
  };

  createNewContact = () => {
    // if (isExist) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }
    const loginInputId = nanoid();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { id: loginInputId, name: this.state.name, number: this.state.number },
      ],
    }));
  };

  filterContacts = (contacts, valueFilter) => {
    return this.setState({
      contacts: contacts.filter(contact =>
        contact.name.toLowerCase().startsWith(valueFilter.toLowerCase())
      ),
    });
  };

  setInitialState = () =>
    this.setState({
      ...INITIAL_STATE,
    });

  render() {
    return (
      <div className="container">
        <Section title="Phonebook">
          <PhonebookForm
            stateName={this.state.name}
            stateNumber={this.state.number}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </Section>
        <Section title="Contacts">
          <FilterContacts
            stateFilter={this.state.filter}
            handleChange={this.handleChange}
          />
          <ContactsList contactsArr={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
