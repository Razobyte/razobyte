import React, { useState, useMemo } from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import sectiondata from './sectionall.json';
import '../Section/Section.css';
import { useNavigate } from 'react-router-dom';

export default function Section() {
    const [input, setInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;  // Number of items per page
    const navigate = useNavigate();

    // Function to convert title to URL-friendly slug
    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-')     // Replace spaces with hyphens
            .replace(/-+/g, '-');     // Replace multiple hyphens with single hyphen
    };

    // Memoized filtering to improve performance
    const filteredData = useMemo(() => {
        if (!input) return sectiondata;

        const lowercasedInput = input.toLowerCase();
        return sectiondata.filter(item => 
            item.Category.toLowerCase().includes(lowercasedInput) ||
            item.full_name.toLowerCase().includes(lowercasedInput) ||
            item.title.toLowerCase().includes(lowercasedInput)
        );
    }, [input]);

    // Get the current page items
    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return filteredData.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, filteredData]);

    // Handle search
    const handleSearch = () => {
        console.log('Searching for:', input);
    };

    // Handle input change
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    // Handle card click and navigate
    const handleCardClick = (blogTitle) => {
        const slug = createSlug(blogTitle);
        navigate(`/blogmain/${slug}`);
    };

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Pagination Logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginationNumbers = [...Array(totalPages).keys()].map(i => i + 1);

    return (
        <Row className='d-flex justify-content-center align-items-center'>
            <div className='w-full px-4 py-5 flex flex-col items-center justify-center'>
                <div className='flex w-full max-w-5xl items-center justify-center mb-6'>
                    <input
                        type="text"
                        placeholder='What are you searching for?'
                        className='flex-grow px-4 py-[16px] border-2 border-gray-100 rounded-l-lg 
                                    focus:outline-none focus:ring-2 focus:ring-[#3b7fbf]/20'
                        value={input}
                        onChange={handleChange}
                    />
                    <button 
                        onClick={handleSearch}
                        className='flex items-center justify-center bg-[#3b7fbf] text-white 
                                   px-6 py-[18px] rounded-r-lg hover:bg-blue-700 
                                   transition-colors duration-300'
                    >
                        <FaSearch className='mr-2' />
                        <span>Search</span>
                    </button>
                </div>

                <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {currentItems.map((item) => (
                        <Card 
                            key={item.id} 
                            className='border-0 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300'
                            onClick={() => handleCardClick(item.full_name)}
                        >
                            <div className='overflow-hidden'>
                                <Card.Img 
                                    variant="top" 
                                    src={item.IMAGE} 
                                    alt={item.full_name} 
                                    className='w-full h-64 object-cover'
                                />
                            </div>
                            <Card.Body>
                                <Card.Title className='md:text-xl text-base font-extrabold mb-3' style={{color:"#3b7fbf"}}>
                                    {item.full_name}
                                </Card.Title>
                                <Card.Text className='text-gray-600 font-normal mb-4'>
                                    {item.title}
                                </Card.Text>
                                <Button className='w-full read-more-btn'>
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <div className='text-center text-gray-500 mt-6'>
                        No results found. Try a different search term.
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className='mt-6'>
                        <div className="pagination flex justify-center items-center gap-2">
                            {paginationNumbers.map((pageNumber) => (
                                <Button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
                                >
                                    {pageNumber}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Row>
    );
}
