import React from "react";

const TaskItem = ({
  task,
  index,
  completeTask,
  removeTask,
  markTaskAsIncomplete
}) => {
  const completeTaskBtn = (
    <button onClick={() => completeTask(index)}>&#10003;</button>
  );
  const undoCompleteBtn = (
    <button onClick={() => markTaskAsIncomplete(index)}>Undo</button>
  );

  return (
    <div className={task.isCompleted ? "todo taskDone" : "todo"}>
      {task.text}
      <div>
        {task.isCompleted ? undoCompleteBtn : completeTaskBtn}
        <button onClick={() => removeTask(index)}> &times; </button>
      </div>
    </div>
  );
};

export default TaskItem;
