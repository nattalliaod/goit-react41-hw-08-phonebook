import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import { useFilter } from 'hooks/useFilter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Spinner } from 'components/Loader/Loader';
import { Contacts, ContactName } from './ContactList.styled';

export const ContactList = () => {
    const { data: contacts, isFetching, error } = useFetchContactsQuery();
    const { value } = useFilter();

    useEffect(() => {
        if (error) {
            toast.error(`${error.status} ${error.data.msg}`)
        }
    }, [error]);
    
    return (
        <>
            {isFetching && <Spinner />}
            <Contacts>
                {contacts && contacts
                    .filter(el =>
                        el.name.toUpperCase().includes(value.toUpperCase()))
                    .map(({ id, name, number }) =>
                    <ContactName key={id}>
                        <ContactItem id={id} name={name} number={number} />
                    </ContactName>)}
            </Contacts>
        </>
    );
}

