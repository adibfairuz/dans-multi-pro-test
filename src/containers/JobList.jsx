/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import getJobList from '../services/getJobList';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
import useMounted from '../hooks/useMounted';
import NotFoundImage from '../assets/images/404_not_found.svg';

const JobList = () => {
    const [query] = useSearchParams();
    const [page, setPage] = useState(1);
    const mounted = useMounted();
    const [selectedItem, setSelectedItem] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const loadingRef = useRef();

    const handleClickItem = useCallback(
        (item) => {
            setSelectedItem(item);
            setIsOpenModal(true);
        },
        [],
    );

    const handleLoadMore = () => {
        const pageOffset = window.pageYOffset + window.innerHeight + 100;
        const loadMoreOffset = loadingRef?.current?.getBoundingClientRect?.()?.top - document.body.getBoundingClientRect().top;
        if (pageOffset > loadMoreOffset) {
            if (data.length && !isLoading && page < 2) {
                setPage((p) => p + 1);
            }
        }
    };

    const fetchData = async ({ reset = false }) => {
        setIsLoading(true);
        try {
            const res = await getJobList({
                page: reset ? 1 : page,
                description: query.get('description'),
                location: query.get('location'),
                full_time: query.get('fullTime'),
            });
            const filteredData = res.filter((item) => item);
            if (reset) {
                setData(filteredData);
            } else {
                const temp = [...data];
                temp.push(...filteredData);
                setData(temp);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleLoadMore);
        return () => {
            window.removeEventListener('scroll', handleLoadMore);
        };
    }, [data, isLoading, page]);

    useEffect(() => {
        fetchData({ reset: true });
    }, []);

    useEffect(() => {
        if (mounted) {
            fetchData({ reset: false });
        }
    }, [page]);

    useEffect(() => {
        if (mounted) {
            fetchData({ reset: true });
        }
    }, [query]);

    return (
        <>
            <div className="p-3 flex flex-wrap">
                {
                    data?.map?.((item) => (
                        <div
                            key={item.id}
                            className="p-2 w-full md:w-1/2"
                        >
                            <Card
                                item={item}
                                onClick={handleClickItem}
                            />
                        </div>
                    ))
                }
            </div>
            {
                !data.length && !isLoading && (
                    <div className="flex justify-center">
                        <img className="w-72 md:w-96" src={NotFoundImage} alt="not found" />
                    </div>
                )
            }
            <div ref={loadingRef} className="flex justify-center w-full">
                { isLoading && <Spinner /> }
            </div>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)}
            >
                <Card noBorder item={selectedItem} />
                <div
                    className="px-5 pt-4"
                    dangerouslySetInnerHTML={{ __html: selectedItem?.description }}
                />
            </Modal>
        </>
    );
};

export default JobList;