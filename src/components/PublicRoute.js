import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { toast } from 'react-hot-toast';

const PublicRoute = ({ children, restricted = false, redirectTo }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    
    if (!redirectTo && restricted) {
    toast.error('Something went wrong')
    return <Navigate to="/" />
    }
    
    return (
        <>
            {shouldRedirect ? <Navigate to={redirectTo} /> : children}
        </>
    );
}

export default PublicRoute;