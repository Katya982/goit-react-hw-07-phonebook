import { React} from "react";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { PhonebookBox, ContactBox, Title } from './App.styaled'

export const App = () => {
  return (
    <PhonebookBox>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactBox>
        {/* <ContactsTitle>Contacts</ContactsTitle> */}
        <Filter />
        <ContactList />
      </ContactBox>
    </PhonebookBox>
  );
};

