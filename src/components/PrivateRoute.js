import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({children, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
if (!redirectTo) {
    toast.error('Something went wrong')
    return <Navigate to="/" />
  }
    return (
        <>
            {isLoggedIn ? children : <Navigate to={redirectTo} />}
        </>
    );
};

export default PrivateRoute;