import Task from "./Task";

const Tasks = ({ tasks, onDelete, setReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          setReminder={setReminder}
          onDelete={onDelete}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
