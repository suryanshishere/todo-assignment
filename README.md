A simple yet feature-rich React-based To-Do List application that allows users to add, remove, and mark tasks as complete. The component supports task input validation, dynamic display, optional sorting and filtering, and persists tasks using `localStorage` for data retention across page reloads.

## Features

* **Add Tasks**: Input validation ensures non-empty task names.
* **Remove Tasks**: Delete tasks with a single click.
* **Mark Complete**: Toggle completion status to track progress.
* **Dynamic Display**: Reactively updates the task list.
* **Sorting & Filtering (Optional)**:

  * Sort by creation date or completion status.
  * Filter by all, active, or completed tasks.
* **Persistence**: Saves tasks to `localStorage` so data persists between sessions.

---

## Usage

### Adding a Task

1. Enter a non-empty task name into the input field.
2. Press `Enter` or click the `Add` button.

### Completing a Task

* Click the checkbox next to the task name to toggle completion.

### Removing a Task

* Click the trash icon (or `Delete` button) next to a task to remove it.

### Sorting & Filtering

* **Sort**:

  * Use the `Sort` dropdown to order tasks by creation date (newest/oldest) or completion status.
* **Filter**:

  * Select `All`, `Active`, or `Completed` to show relevant tasks.

---

## Persistence with localStorage

Tasks are automatically saved to `localStorage` on every change. On app load, existing tasks are loaded from `localStorage`.

---

---
