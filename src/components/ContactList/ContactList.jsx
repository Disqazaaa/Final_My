import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className="ContactList__empty">никого нет</p>;
  }

  return (
    <div class="ContactList">
      {contacts.map((c) => (
        <ContactItem key={c.id} contact={c} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ContactList;
