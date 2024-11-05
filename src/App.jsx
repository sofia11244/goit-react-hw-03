import './App.css'
import ContactForm from './components/ContactForm.jsx'
import SearchBox from './components/SearchBox.jsx'
import ContactList from './components/ContactList.jsx'

import data from './data/contactData.json'

function App() {
  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList data={data} />
  </div>
  )
}

export default App
