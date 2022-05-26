import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavPanel, NavList, NavItem, Link } from './AuthNav.styled';

export const AuthNav = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
            {!isLoggedIn &&
                <NavPanel>
                    <NavList>
                        <NavItem>
                            <Link to='register'>Registration</Link>
                        </NavItem>
        
                        <NavItem>
                            <Link to='login'>LogIn</Link>
                        </NavItem>
                    </NavList>
                </NavPanel>
            }
        </>
    )
};
