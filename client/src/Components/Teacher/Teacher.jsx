import React from 'react';
import Courses from './Courses';
import { Divider } from '@chakra-ui/react';
import Nav from './NavLink';
import CreateCourse from './CreateCourse';

export default function Student() {
    const user_id = localStorage.getItem("user_id") != null ? localStorage.getItem("user_id") : sessionStorage.getItem("user_id");

    return (
        <div className='page-container'>
            <Nav />

            <CreateCourse />
            <h1>Created Courses</h1>
            <Courses userID={user_id} />

            <h1>All Courses</h1>
            <Divider />
            <Courses userID={null} />
        </div>
    );
}
