import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => (
  <div className="Todo">
    <span
      className={task.completed ? 'completed' : ''}
      onClick={() => toggleComplete(task.id)}
    >
      {task.task}
    </span>
    <div className="icons">
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  </div>
);

export default Todo;