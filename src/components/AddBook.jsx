import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addBook} from '../redux/bookSlice';
export default function AddBook() {
  const [title,setTitle]=useState('');
  const [author,setAuthor] =useState('');
  const dispatch=useDispatch();
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(addBook({title,author}))
    setAuthor('');
    setTitle('');

  }
  return (
    <div>
     <h2>Add book</h2>
     <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder='Title' required onChange={(e)=>setTitle(e.target.value)}/>
      <input type="text" value={author} placeholder='author' required onChange={(e)=>setAuthor(e.target.value)} />
     <button type='submit'>Add</button>
     </form>
    </div>
  )
}

