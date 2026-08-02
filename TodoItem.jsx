function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="task">
      <span
        className={task.completed ? "completed" : ""}
      >
        {task.text}
      </span>

      <div>
        <button
          className="done"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          className="delete"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;