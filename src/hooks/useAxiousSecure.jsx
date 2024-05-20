import axios from 'axios';
import React from 'react';
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})
const useAxiousSecure = () => {
    return axiosSecure;
};

export default useAxiousSecure;