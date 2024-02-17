import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Books from './components/Books'

function App() {

  const [books, setBooks] = useState([])
  
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((response) => {console.log(response.data.books); setBooks(response.data.books) })
  }, [])



  return (
    <>
      <div>
          <Books books={books}/>
      </div>
    </>
  )
}

export default App
