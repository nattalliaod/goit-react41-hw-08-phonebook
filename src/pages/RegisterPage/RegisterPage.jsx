import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { useNavigate } from "react-router-dom";
import { Phonebook, LabelName, InputContact, AddUser } from 'components/ContactForm/ContactForm.styled'

const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Phonebook onSubmit={handleSubmit}>
            <LabelName>
                Name
                <InputContact placeholder="name"
                    type="text" name="name" value={name} onChange={handleChange} />
            </LabelName>

            <LabelName>
                Email
                <InputContact placeholder="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                
            </LabelName>

            <LabelName>
                Password
                <InputContact placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
               
            </LabelName>

            <AddUser type="submit">Register</AddUser>
            <AddUser type="button" onClick={() => navigate('/')}>
                Cancel
            </AddUser>
        </Phonebook>
    );
};

export default RegisterPage; 