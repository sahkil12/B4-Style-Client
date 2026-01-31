import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const UseAuth = () => {
     const all = useContext(AuthContext)
     return all
};

export default UseAuth;