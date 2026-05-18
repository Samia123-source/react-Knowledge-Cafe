

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const[readingTime, setReadingTime] = useState(0)
  const handleAddToBookmark = blog => {
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
    }
    const handleMarkAsRead = (id, time)  => {
      const newReadingTime = readingTime + time;
      setReadingTime(newReadingTime);
      //remove the read blog from bookmark
     // console.log("remove bookmark,id")
     const remainingbookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
     setBookmarks(remainingbookmarks);
    }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto '>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead=
      {handleMarkAsRead }></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
