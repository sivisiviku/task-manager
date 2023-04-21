import Task from './Task'
import './TaskList.css'

function TaskList(props) {
    function handleDelete(id) {
        props.handleDelete(id)
    }
    function onUpdate(task) {
        props.onUpdate(task)
    }
    return <ul>
        {
            props.tasks.map(task => 
                <Task 
                    task={task} 
                    key={task.id} 
                    handleDelete={handleDelete}
                    onUpdate={onUpdate}>
                </Task>
            )
        }
    </ul>
}

export default TaskList