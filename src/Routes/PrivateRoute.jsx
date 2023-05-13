import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location);
    const {user,loading} = useContext(AuthContext);

    if (loading) {
        return <progress className='progress w-56'></progress>;
    }
    if (user?.email) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;