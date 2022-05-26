import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Container, User, LogOutButton } from './UserMenu.styled';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <User>Welcome, {name}</User>

      <LogOutButton
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigate('/')
        }}
      >Logout
      </LogOutButton>
    </Container>
  );
};