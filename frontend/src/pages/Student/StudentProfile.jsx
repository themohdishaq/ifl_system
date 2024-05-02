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
                    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjExNGZhMjBiYmNhZjY4NTRkMThmIn0sImlhdCI6MTcxNDU3MDg2MX0.NhQSa1OF6eK65kGaXxQldFVBuZOtny2qvK2lJ6mLdYk"
                }
            });

            if (!response.data) {
                throw new Error('Error fetching student');
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: getStudent,
    });

    return (
        <>
            {profile && <StudentProfileEdit profile={profile} />}
        </>
    )
}