import React from 'react';
import Courses from './Courses';
import { Divider, Heading } from '@chakra-ui/react';
import './Student.css'
import Navbar from '../NavBar/NavBar';

export default function Student() {
    return (
        <div className='page-container'>
            <Navbar />
            <Heading
                fontSize={'4xl'} textAlign={'center'}
                style={{
                    textDecoration: "underline var(--darkBlue) 10px",
                    textDecorationSkipInk: "none",
                    textUnderlineOffset: "-6px",
                    margin: "80px 0 20px 0"
                }}
            >Popular Courses</Heading>
            <Divider />
            <Courses />
        </div>
    );
}
