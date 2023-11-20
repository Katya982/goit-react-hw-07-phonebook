import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactRoster, Button, Item } from './ContactList.styled';
import { selectError, selectLoading, selectFilteredContacts } from '../../redux/selectors';
import { BsFillPersonFill } from "react-icons/bs";
import { fetchContacts, deleteContacts } from '../../redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactRoster>
      {isLoading && !error ? (
        <p>Loading ...</p>
      ) : filteredContacts.length === 0 && !error ? (
        <p>Your phonebook is empty</p>
      ) : (
        filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
          <BsFillPersonFill />
          <Item>{name}</Item>
          <Item>{number}</Item>
            <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </Button>
          </ContactItem>
        ))
      )}
    </ContactRoster>
  );
};

export default ContactList;