import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const useAuth = () => {
     const all = useContext(AuthContext)
     return all
};

export default useAuth;