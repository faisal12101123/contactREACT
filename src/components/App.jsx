import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar"

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar img= "https://scontent.fosl1-1.fna.fbcdn.net/v/t1.0-9/p720x720/72288693_610595119345787_1460575793045307392_o.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=pZDk3MgVKd0AX_Q7Giv&_nc_ht=scontent.fosl1-1.fna&_nc_tp=6&oh=54d1537402648db202929ae7cb5e347e&oe=5EC50E2E" />
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
