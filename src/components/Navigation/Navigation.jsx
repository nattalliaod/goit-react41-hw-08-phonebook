import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavPanel, NavList, NavItem, Link } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavPanel>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        
        {isLoggedIn && <NavItem>
          <Link to="contacts">Contacts</Link>
        </NavItem>}
      </NavList>
    </NavPanel>)
};