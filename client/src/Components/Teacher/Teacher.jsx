import React from 'react';
import Courses from './Courses';
import { Divider, Heading } from '@chakra-ui/react';
// import Nav from './NavLink';
import './Student.css'
import CreateCourse from './CreateCourse';
import Navbar from '../NavBar/NavBar';

export default function Student() {
    const user_id = localStorage.getItem("user_id") != null ? localStorage.getItem("user_id") : sessionStorage.getItem("user_id");

    return (
        <div className='page-container'>
            <Navbar />

            <CreateCourse />
            <Heading
                fontSize={'4xl'} textAlign={'center'}
                style={{
                    textDecoration: "underline var(--darkBlue) 10px",
                    textDecorationSkipInk: "none",
                    textUnderlineOffset: "-6px",
                    margin: "60px 0 20px 0"
                }}
            >Created Courses</Heading>
            <Divider />
            <Courses userID={user_id} />

            <Heading
                fontSize={'4xl'} textAlign={'center'}
                style={{
                    textDecoration: "underline var(--darkBlue) 10px",
                    textDecorationSkipInk: "none",
                    textUnderlineOffset: "-6px",
                    margin: "60px 0 20px 0"
                }}
            >All Courses</Heading>
            <Divider />
            <Courses userID={null} />
        </div>
    );
}
