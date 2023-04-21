import './App.css';
import NewTaskForm from './component/NewTaskForm'
import TaskList from './component/TaskList';
import Header from './component/Header';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          title: 'Menyapu',
          dueDate: '2022-04-15',
          description: 'Menyapu lantai menggunakan sapu. Menyapu harus dilakukan secara menyeluruh.'
      },
      {
          id: 2,
          title: 'Mencuci',
          dueDate: '2023-07-28',
          description: 'Mencuci baju. Mencuci baju harus menggunakan sabun deterjen.'
      }
  ])
  const [openNewTaskForm, setOpenNewTaskForm] = useState(false)
  const [filteredTasks, setFilteredTask] = useState(tasks)

  function addTask(task) {
    setFilteredTask([
      {
        id: tasks.length + 1,
        ...task
      },
      ...tasks
    ])
    setTasks(prevTask => [
      {
        id: tasks.length + 1,
        ...task
      },
      ...prevTask
    ])
  }

  function newTask(open) {
    setOpenNewTaskForm(open)
  }

  function handleSearch(keyword) {
    if(keyword === '') setFilteredTask(tasks)
    else setFilteredTask(tasks.filter(task => task.title === keyword))
  }

  function handleDelete(id) {
    const newTaskList = tasks.filter(task => task.id !== id)
    setTasks(newTaskList)
    setFilteredTask(newTaskList)
  }

  function onUpdate(task) {
    const index = tasks.findIndex(t => t.id === task.id)
    tasks[index].title = task.title
    tasks[index].dueDate = task.dueDate
    tasks[index].description = task.description
    setFilteredTask(tasks)
    setTasks(tasks)
  }

  return (
    <div className='container'>
      <Header newTask={newTask} handleSearch={handleSearch}></Header>
      {
        openNewTaskForm && <NewTaskForm addTask={addTask} newTask={newTask}></NewTaskForm>
      }
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} onUpdate={onUpdate}></TaskList>
    </div>
  );
}

export default App;
