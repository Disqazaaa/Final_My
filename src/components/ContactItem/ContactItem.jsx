import React from "react";
import "./ContactItem.css";

function ContactItem({ contact, onDelete }) {
  return (
    <div class="ContactItem">
      <div class="ContactItem__info">
        <p class="ContactItem__name">{contact.name}</p>
        <p class="ContactItem__phone">{contact.phone}</p>
        <p class="ContactItem__email">{contact.email}</p>
      </div>
      <button class="ContactItem__delete" onClick={() => onDelete(contact.id)}>Удалить</button>
    </div>
  );
}

export default ContactItem;
