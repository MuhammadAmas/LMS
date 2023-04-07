import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

export const getUdemyCourses = async () => {
    // resonse_object.header("Access-Control-Allow-Origin", "*");
    // resonse_object.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const response = await axios.get('https://www.udemy.com/api-2.0/courses/238934', {
        headers: {
            // Authorization: `Basic ${(`${clientId}:${clientSecret}`)}`,

            "Accept": "application/json, text/plain, */*",
            "Authorization": "Basic NmtKWThHSXl5dmlGMXcwOExUREVzbGZydUxwWlZqenljOXhTekpWajp4cEtqNk5aZjlpUXJLMDNQcGVRU2FQUGx1Y2s2UmNrY1JrZVNOZHh0dm1XUWRHQ1AwM3FQYXRTSm8xWWJSQUhEQ01qRFh0Vk1rbHdGdHZxcmhKcG1yQ1FHWENLRVhUSzdwR3FDTndxRk5qUVZDOEtaSGpiemE5a3Bib1ZZejhQcQ==",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    });
    console.log(response)
    return response.data;
};

    // const udemyKey = process.env.REACT_APP_UDEMY_KEY;
    // const udemySecret = process.env.REACT_APP_UDEMY_TOKEN;

    // const apiUrl = 'https://www.udemy.com/api-2.0/courses/';

    // export const getUdemyCourses = async () => {
    //     try {
    //         const response = await axios.get(apiUrl, {
    //             headers: {
    //                 'Authorization': 'Bearer ' + udemySecret,
    //                 'X-Udemy-Client-Id': udemyKey,
    //             },
    //         });
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //         return [];
    //     }
    // };
