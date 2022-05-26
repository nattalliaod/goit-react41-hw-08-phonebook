import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Phonebook, LabelName, InputContact, AddUser } from 'components/ContactForm/ContactForm.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Phonebook onSubmit={handleSubmit}>
      <LabelName>
        Email
        <InputContact
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </LabelName>

      <LabelName>
        Password
        <InputContact
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </LabelName>

      <AddUser type="submit">LogIn</AddUser>
    </Phonebook>
  );
}

export default LoginPage;