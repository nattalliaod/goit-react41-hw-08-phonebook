import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { Overlay, Modal } from './EditContactModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const EditContactModal = ({onEdit}) => {
    
    const navigate = useNavigate();

    const onCloseModal = () => {
        navigate('/contacts');
        onEdit();
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onCloseModal();
        }
    };

    const handleBackdropClick = event => {
        const { currentTarget, target } = event;
        if (currentTarget === target) {
            onCloseModal();
        }
    };

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <Modal>
                <UpdateForm onCloseModal={onCloseModal} />
            </Modal>
        </Overlay>,
        modalRoot,
    );
};

EditContactModal.propTypes = {
    onEdit: PropTypes.func,
}


