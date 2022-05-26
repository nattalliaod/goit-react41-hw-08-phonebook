import { useFetchContactsQuery, useAddContactMutation } from 'redux/contacts/contactSlice';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Phonebook, LabelName, InputContact, AddUser } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const [addContact, { error }] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  useEffect(() => {
    if (error) { 
      toast.error(`${error.status} ${error.data.msg}`)
    } 
  }, [error]);
  
  const handleSubmit = e => {
    e.preventDefault();

    if (data.map(contact => contact.name).includes(name)) {
      toast.error(`${name} is already in contacts`);
      reset();
      return;
    }

    addContact({ name, number });
    reset();
    toast.success('Contact has been added')
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  return (
      <Phonebook onSubmit={handleSubmit}>
        <LabelName>
          Name
          <InputContact
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelName>

        <LabelName>
          Number
          <InputContact
            type="tel"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelName>

        <AddUser type='submit'>Add contact</AddUser>
      </Phonebook>
    );
}