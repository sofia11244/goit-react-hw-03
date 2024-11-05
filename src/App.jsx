import './App.css'
import ContactForm from './components/ContactForm.jsx'
import SearchBox from './components/SearchBox.jsx'
import ContactList from './components/ContactList.jsx'

import { useState } from 'react';

import data from './data/contactData.json'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [contacts, setContacts] = useState(data);

  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value); // search state updte
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
  
  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
};


  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={handleAddContact} />
    <SearchBox inputValue={searchValue} handleChange={handleSearchChange} />
    <ContactList data={filteredContacts} onDelete={handleDeleteContact} />
  </div>
  )
}

export default App
