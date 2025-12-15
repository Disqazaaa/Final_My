import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm({ onAdd = () => {} }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    onAdd({ id: Date.now(), name, phone, email });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div class="Form" >
      <input class="Form__input" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)}></input>
      <input class="Form__input" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
      <input class="Form__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <button class="Form__btn" onClick={handleSubmit}> Добавить</button>
    </div>
  );
}

export default ContactForm;
