import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import './Section/section.css';

let contacts = false;
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // const name = form.name.value;
    // console.log(name);
    // this.props.submit(...this.state);
    // console.log(this.props.submit(...this.state));
    // const { contacts, name, number } = this.state;
    // this.props.submit({ contacts, name, number });
    this.createNewContact();
    contacts = true;
    form.reset();
  };

  handleChange = ({ target: { value, name } }) => {
    // Контрольована валідація
    // if (isExist) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }
    // if (value.includes('@')) return;
    // if (value.includes('@')) alert('name is already in contacts.');
    this.setState({ [name]: value });
  };

  createNewContact = () => {
    const loginInputId = nanoid();
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { id: loginInputId, name: this.state.name, number: this.state.number },
      ],
    }));
  };

  render() {
    return (
      <div className="container">
        <Section title="Phonebook">
          <PhonebookForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            stateName={this.state.name}
            stateNumber={this.state.number}
          />
        </Section>
        <Section title="Contacts">
          {contacts && <Contacts contactsArr={this.state.contacts} />}
        </Section>
      </div>
    );
  }
}
