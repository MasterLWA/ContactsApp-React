import './App.css';
import React from 'react';
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import AddContact from './AddContact';


function App() {

  const contacts = [
    {
      id: "1",
      name: "John",
      email: "join@g.com"
    },
    {
      id: "2",
      name: "Doe",
      email: "Doe@fa.com"
    }
  ];


  return ( 
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
