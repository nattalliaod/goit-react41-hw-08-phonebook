import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useDeleteContactMutation } from "redux/contacts/contactSlice";
import { Spinner } from "components/Loader/Loader";
import { ContactName, ContactNumber, ContactButton } from "./ContactItem.styled"
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { useModal } from 'hooks/useModal';

export const ContactItem = ({ id, name, number }) => {
    const navigate = useNavigate();
    const { isModalOpen, openModal, closeModal } = useModal();
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    
    useEffect(() => {
        if (isLoading) toast(`Contact deleting...`)
    }, [isLoading]);
    
    return (
        <>
            <ContactName>{name}:</ContactName>
            <ContactNumber href={`tel:${number}`}>{number}</ContactNumber>
            <ContactButton type='button' onClick={() => {
                navigate(`/contacts/${id}`, openModal())
            }}>
                <FiEdit3 />
            </ContactButton>
            <ContactButton type='button' onClick={() => deleteContact(id)} disabled={isLoading}>
                {isLoading ? <Spinner width={10} height={10} /> : <RiDeleteBin6Line />}
            </ContactButton>
            {isModalOpen && <EditContactModal onEdit={closeModal} />}
        </>
    );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};