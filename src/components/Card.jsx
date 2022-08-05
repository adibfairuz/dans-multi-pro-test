import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBriefcase, BiTime } from 'react-icons/bi';
import randomColor from '../utils/randomColor';
import initialName from '../utils/inititalName';

const Card = React.memo((props) => {
    const {
        className,
        item,
        onClick,
        noBorder,
    } = props;

    return (
        <div
            className={`px-4 py-5 h-full ${noBorder ? '' : 'cursor-pointer border border-gray-400 rounded-sm hover:shadow-lg hover:shadow-slate-300/60'} ${className}`}
            onClick={() => onClick && onClick(item)}
        >
            <div className="flex items-center">
                <img
                    className="w-10 rounded-md"
                    src={`https://dummyimage.com/400x400/${randomColor()}/ffffff&text=${initialName(item.company)}`}
                    alt="job"
                />
                <div className="ml-3">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.company}</div>
                </div>
            </div>
            <div className="flex items-center mt-2">
                <HiOutlineLocationMarker className="text-gray-600 mr-1" />
                <div className="text-gray-600 capitalize text-sm font-semibold">{item.location}</div>
            </div>
            <div className="flex items-center">
                <BiBriefcase className="text-gray-600 mr-1" />
                <div className="text-gray-600 capitalize text-sm font-semibold">{item.type}</div>
            </div>
            <div className="flex items-center mt-6">
                <BiTime className="text-green-700 mr-1" />
                <div className="text-green-700 text-sm font-semibold">
                    Created at:
                    {' '}
                    {item.created_at.split('UTC')[0]}
                </div>
            </div>
        </div>
    );
});

export default Card;