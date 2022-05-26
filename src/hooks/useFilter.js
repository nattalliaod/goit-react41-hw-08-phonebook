import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filterSelector';
import { filterContact } from 'redux/filter/filterSlice';

export const useFilter = () => {
    const dispatch = useDispatch();
    
    const value = useSelector(getFilter);
    const filter = el => dispatch(filterContact(el));

      return {
        value,
        filterContact: filter,
    };
}