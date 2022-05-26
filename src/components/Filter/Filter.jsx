import { useFilter } from 'hooks/useFilter';
import { Text, FindContact } from './Filter.styled';

export const Filter = () => {
    const {value, filterContact} = useFilter();
    return (
        <>
            <Text>
                Find contacts by name
                <FindContact
                    type="text"
                    name="filter"
                    value={value}
                    onChange={e => filterContact(e.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Text>
        </>
    );
}
