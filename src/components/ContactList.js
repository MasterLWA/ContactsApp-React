import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return(
          <ContactCard></ContactCard>;
        );
    });
    return(
        <div className="ui celled list Container">
            {renderContactList}
        </div>
    );
}

export default ContactList;