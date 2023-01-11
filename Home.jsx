import React from 'react'
import Todoitem from './item/Todoitem'


const todos = [
  {
    _id: 'wefw23',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    _id: 'wefw23d',
    title: 'Read next chapter of the book',
    isCompleted: false
  },
  {
    _id: 'wefw23df',
    title: 'Send the finished assignment',
    isCompleted: false
  }
]

const Home = () => {
  return (
    <div className='bg'>
      
      {todos.map(itemTodo => (<Todoitem todo = {itemTodo._id}/>))}
    </div>
 

  )
}

export default Home
