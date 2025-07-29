import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utilify/utility';
import Book from '../Books/Book';


const Listedbooks = () => {
    const [readList,setReadList] = useState([]);
    const allBooks = useLoaderData();
     useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // worst way
        console.log(storedReadList, storedReadListInt, allBooks);

        // 
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);

    const handleSort = sortType => {
        setSort(sortType);

        // 
        if(sortType === 'No of pages'){
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }

        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }

    }
    return (
        <div>
            <h3 className='text-3xl my-8'>Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                   {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                   }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Listedbooks;