import './App.css'
import ContactForm from './components/ContactForm.jsx'
import SearchBox from './components/SearchBox.jsx'
import ContactList from './components/ContactList.jsx'

import { useState, useEffect } from 'react';

import data from './data/contactData.json'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [contacts, setContacts] = useState(data);



  // local storage
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); //update state

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  }; //add

  const removeContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };
  
  const handleSearchChange = (evt) => {
    setSearchValue(evt.target.value); // search state updte
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

//   const handleAddContact = (newContact) => {
//     setContacts(prevContacts => [...prevContacts, newContact]);
//   };
  
//   const handleDeleteContact = (id) => {
//     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
// };


  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={addContact} />
    <SearchBox inputValue={searchValue} handleChange={handleSearchChange} />
    <ContactList data={filteredContacts} onDelete={removeContact} />
  </div>
  )
}

export default App
