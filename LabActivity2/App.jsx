//  Miclat, Chadle Rei M.

import './App.css'
import BookList from './components/BookList'
import MovieList from './components/MovieList'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <div className="card  bg-gray">
        <h1>Lab Activity 2</h1>
        <div className="card-Item"><ToDoList /></div>
        <div className="card-Item"><MovieList /></div>
        <div className="card-Item"><BookList /></div>
      </div>
    </>
  )
}

export default App