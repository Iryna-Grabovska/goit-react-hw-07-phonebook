import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { formSubmithandle } from 'store/contactsSlice';
import {useCreateContactsMutation} from 'store/contactsApi'

import Button from 'components/Button';
import Input from 'components/Input';
import shortid from 'shortid';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const contacts = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();
  const [createContacts]= useCreateContactsMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
//  console.log(e.target.value);
// createContacts(e.currentTarget)
 contacts.some(contact => contact.name.includes(name))
      ? alert(`${name} is already in contacts.`)
             : createContacts({ name, number });
      // : dispatch(formSubmithandle({ name, number }));
    reset();
    // contacts.some(contact => contact.name.includes(name))
    //   ? alert(`${name} is already in contacts.`)
    //   : dispatch(formSubmithandle({ name, number }));
    // reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName="Name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
        id={nameInputId}
      />
      <Input
        labelName="Number"
        name="number"
        type="tel"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
        id={numberInputId}
      />
      <Button label="Add contact" onSubmit={formSubmithandle} />
    </form>
  );
}
