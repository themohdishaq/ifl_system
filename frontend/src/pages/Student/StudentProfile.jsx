import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import StudentProfileEdit from '../../components/StudentProfileEdit';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export default function StudentProfile() {


    const getStudent = async () => {
        try {
            const url = 'http://localhost:3333/ifl_system/auth/student/get-profile';
            const response = await axios.get(url, {
                headers: {
                    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyYWM4NDFmYjZjMjEzZmEwMDNlNGNiIn0sImlhdCI6MTcxNDU1NjU2MX0.6et76vpC0tTsJIZ5kEAH7C9WpFZO3Zhk3368j0PACiY"
                }
            });
            console.log(response.data)
            if (!response.data) {
                throw new Error('Error fetching student');
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const { data: profile} = useQuery({
        queryKey: ['profile'],
        queryFn: getStudent,
    });

    return (
        <>
            <StudentProfileEdit profile={profile} />
            
   </>
    );
}