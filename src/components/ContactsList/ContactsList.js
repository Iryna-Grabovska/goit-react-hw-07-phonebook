import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { useFetchContactsQuery , useDeleteContactsMutation} from 'store/contactsApi'
import s from './ContactsList.module.css';

const ContactsList = () => {
  const {data=[], isLoading, isFetching}= useFetchContactsQuery();
  const [deleteContact, {isLoading : isDeleting}] = useDeleteContactsMutation();
  //  const dispatch = useDispatch();
   const contacts = useSelector(state => state.contacts);
  const filterContact = useSelector(state => state.filterContact);

  const visibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleDeleteContacts = async (id)=> {
    await deleteContact(id).unwrap();
  };

 if(isLoading) return <h1>loading...</h1>
  return (
    <>
      <ul>
        {visibleContacts().map(({ id, name, phone }) => (
          <li key={id} className={s.contactsListItem}>
            <span> {name}: </span>
            <span>{phone}</span>
            <button
              className={s.contactListBtn}
              type="button"
              // onClick={() => dispatch(deleteContact(id))}
               onClick= {()=>handleDeleteContacts(id)}
              //  isLoading={isDeleting}
            >
           {
          
        isDeleting ? 'Deleting...' : 'Delete'
           }   
             
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
