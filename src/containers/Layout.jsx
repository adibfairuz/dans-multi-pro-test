import React, { useEffect } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Layout = (props) => {
    const { children, auth } = props;
    const navigate = useNavigate();
    const { user, logOut } = UserAuth();
    useEffect(() => {
        if (!Object.keys(user || {}).length) {
            navigate('/login');
        }
    }, [user]);
    return (
        <div>
            {
                auth && (
                    <div className="flex justify-between px-5 py-4 bg-blue-800">
                        <Link to="/">
                            <div className="text-white font-semibold">JOB PORTAL</div>
                        </Link>
                        <div className="flex text-white">
                            <div className="flex items-center mr-4">
                                <BiUserCircle className="mr-1 text-lg" />
                                <span className="capitalize">{user?.displayName}</span>
                            </div>
                            <div className="flex items-center cursor-pointer" onClick={logOut}>
                                <FiLogOut className="mr-1 text-lg" />
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="">
                { children }
            </div>
        </div>
    );
};

export default Layout;