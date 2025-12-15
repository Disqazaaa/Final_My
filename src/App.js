import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log("обновлён cписок контактов!", contacts);
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div class="App">
      <h1 class="App__title">Контакты</h1>
      <ContactForm onAdd={addContact}/>
      <ContactList contacts={contacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
