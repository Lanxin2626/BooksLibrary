import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBooks, deleteBook } from '../redux/bookSlice';
export default function BookList() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books); 

    useEffect(() => {
        dispatch(fetchBooks()); 
    }, [dispatch]); 
    
  return (
    <div>
      <h2>books</h2>
      <ul>
        {books.map(book=>(
            <li key={book.id}>
                {book.title} by {book.author}
                <button onClick={()=>dispatch(deleteBook({id:book.id}))}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

