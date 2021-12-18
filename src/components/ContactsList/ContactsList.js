import React from 'react';
import { useSelector } from 'react-redux';
// import { deleteContact, createContacts } from 'store/contactsSlice';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
} from 'store/contactsApi';
import { Loading } from 'components/Loader/Loader.js';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const { data = [], isLoading } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  const filterContact = useSelector(state => state.filterContact);

  const visibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleDeleteContacts = async id => {
    await deleteContact(id).unwrap();
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <ul className={s.ContactsList}>
        {visibleContacts().map(({ id, name, phone }) => (
          <li key={id} className={s.contactsListItem}>
            <span> {name}: </span>
            <span>{phone}</span>
            <button
              className={s.contactListBtn}
              type="button"
              onClick={() => handleDeleteContacts(id)}
              disabled={isDeleting}
            >
              {isDeleting && <Loading />}
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
