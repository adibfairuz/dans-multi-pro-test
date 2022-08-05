import React from 'react';
import Filter from '../containers/Filter';
import JobList from '../containers/JobList';

const Home = () => {
    return (
        <>
            <Filter />
            <JobList />
        </>
    );
};

export default Home;