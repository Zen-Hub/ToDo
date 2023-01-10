import React from 'react'
import Todoitem from './Todoitem'


const todos = [
  {
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    title: 'Read next chapter of the book',
    isCompleted: false
  },
  {
    title: 'Send the finished assignment',
    isCompleted: false
  }
]

const Home = () => {
  return (
    <div className='bg'>
      <Todoitem todo = {itemTodo}/>
    </div>


  )
}

export default Home
