import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
import TodoList from "./TodoList";
uuidv4();

const FILTER_MAP = {
  All: () => true,
  Completed: (task) => task.completed,
  Pending: (task) => !task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const TodoWrapper  = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [editingId, setEditingId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) setTodos(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (!task.trim()) return;
    const newTask = { id: Date.now(), task, completed: false };
    setTodos([newTask, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTodo = (newTask, id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, task: newTask } : t)));
    setEditingId(null);
  };

  const filtered = todos
    .filter(FILTER_MAP[filter])
    .sort((a, b) => (sortOrder === "Newest" ? b.id - a.id : a.id - b.id));

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />

      <div className="controls">
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {FILTER_NAMES.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
        <label>
          Sort:
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </label>
      </div>

      {editingId ? (
        <EditTodoForm
          editTodo={editTodo}
          task={todos.find((t) => t.id === editingId)}
        />
      ) : (
        <TodoList
          tasks={filtered}
          deleteTodo={deleteTodo}
          editTodo={(id) => setEditingId(id)}
          toggleComplete={toggleComplete}
        />
      )}
    </div>
  );
};

export default TodoWrapper;