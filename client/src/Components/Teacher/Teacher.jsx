import React from 'react';
import Courses from './Courses';
import { Divider } from '@chakra-ui/react';
import Nav from './NavLink';
import './Student.css'
import CreateCourse from './CreateCourse';

export default function Student() {
    return (
        <div className='page-container'>
            <Nav />

            <CreateCourse />
            <h1>Created Courses</h1>
            <Courses />

            <h1>All Courses</h1>
            <Divider />
            <Courses />
        </div>
    );
}
