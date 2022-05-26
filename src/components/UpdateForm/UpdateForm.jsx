import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSaveAlt, MdOutlineCancel } from 'react-icons/md';
import { useEditContactMutation } from 'redux/contacts/contactSlice';
import { Phonebook, LabelName, InputContact } from 'components/ContactForm/ContactForm.styled';
import { ContactButton } from 'components/ContactItem/ContactItem.styled';
import { ContainerForm } from './UpdateForm.styled';

export const UpdateForm = ({onCloseModal}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [editContact] = useEditContactMutation();
    const { id } = useParams();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        editContact({ id, name, number });
        onCloseModal();
        setName('');
        setNumber('');
    };
    
    return (
        <ContainerForm>
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

                <ContactButton type="submit"><MdSaveAlt /></ContactButton>
                <ContactButton type="button" onClick={onCloseModal}>
                    <MdOutlineCancel />
                </ContactButton>
            </Phonebook>
        </ContainerForm>
    );
};

UpdateForm.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
}