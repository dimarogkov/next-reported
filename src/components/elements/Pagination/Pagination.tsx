'use client';
import { useAuthor } from '@/src/store/author';
import { getPageNumbers } from '@/src/helpers';

import PaginationBtn from './PaginationBtn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    itemsLength: number;
};

const Pagination: React.FC<Props> = ({ itemsLength }) => {
    const { itemsPerPage, currentPage, setCurrentPage } = useAuthor((state) => state);

    const pageCount = Math.ceil(itemsLength / itemsPerPage);
    const pageNumbers = getPageNumbers(currentPage, pageCount);

    const getPreviousPage = () => {
        setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
    };

    const getNextPage = () => {
        setCurrentPage(currentPage !== pageCount ? currentPage + 1 : currentPage);
    };

    return (
        <div className={`flex justify-center gap-2`}>
            <PaginationBtn
                onClick={getPreviousPage}
                className={
                    currentPage === 1 ? 'opacity-35 pointer-events-none' : 'border-gray text-black cursor-pointer'
                }
            >
                <ChevronLeft className='w-5 h-5 -ml-0.5' />
            </PaginationBtn>

            {pageNumbers.map((number) => (
                <PaginationBtn
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={
                        number === currentPage
                            ? 'border-red bg-red text-white pointer-events-none'
                            : 'border-gray text-black cursor-pointer'
                    }
                >
                    {number}
                </PaginationBtn>
            ))}

            <PaginationBtn
                onClick={getNextPage}
                className={
                    currentPage === pageCount
                        ? 'opacity-35 pointer-events-none'
                        : 'border-gray text-black cursor-pointer'
                }
            >
                <ChevronRight className='w-5 h-5 ml-0.5' />
            </PaginationBtn>
        </div>
    );
};

export default Pagination;
