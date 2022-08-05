import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate, useSearchParams } from 'react-router-dom';
import cities from '../mocks/cities.json';

const fullTimeOptions = [
    {
        label: 'Yes',
        value: true,
    },
    {
        label: 'No',
        value: false,
    },
];

const Filter = () => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [location, setLocation] = useState(query.get('location') || '');
    const [fullTime, setFullTime] = useState(query.get('full_time') || false);
    const [description, setDescription] = useState(query.get('description') || '');

    const handleSearch = () => {
        navigate(`/?location=${location}&description=${description}&full_time=${fullTime}`);
    };

    return (
        <div className="flex items-center px-5 pt-8 pb-3 flex-wrap md:flex-nowrap">
            <input
                className="css-1s2u09g-control mr-4 flex-1 px-2 min-w-[10em] mb-2"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <Select
                isClearable
                className="w-60 mr-4 flex-1 min-w-[10em] mb-2"
                placeholder="Location"
                options={cities}
                onChange={(e) => setLocation(e?.value || '')}
                value={cities.find((item) => item.value === location)}
            />
            <Select
                isClearable
                className="w-60 mr-4 flex-1 min-w-[10em] mb-2"
                placeholder="Full Time"
                options={fullTimeOptions}
                onChange={(e) => setFullTime(e?.value || '')}
                value={
                    fullTimeOptions.find((item) => item.value.toString() === fullTime.toString())
                }
            />
            <button
                onClick={handleSearch}
                className="
                    focus:ring-4 font-medium rounded-lg text-sm px-5 border py-2 text-center min-w-max
                    opacity-100
                    bg-blue-800
                    hover:bg-blue-900
                    text-white
                    focus:ring-blue-300"
                type="button"
            >
                Search
            </button>
        </div>
    );
};

export default Filter;