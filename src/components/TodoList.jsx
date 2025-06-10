import Todo from './Todo';

const TodoList = ({ tasks, deleteTodo, editTodo, toggleComplete }) => (
  <div>
    {tasks.map(t => (
      <Todo
        key={t.id}
        task={t}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />
    ))}
  </div>
);

export default TodoList;