import TaskItem from "../TaskItem/TaskItem"

// Definimos el componente TaskList con sus propiedades
function TaskList({ tasks, taskComplete, taskDelete }) {

    return (
      <>
        <div className="list-group">
        {/* mapeamos sobre la lista de tareas y renderizamos un componente TaskItem para cada tarea */}
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              name={task.name}
              complete={task.complete}
              taskComplete={() => taskComplete(task.id)}
              taskDelete={() => taskDelete(task.id)}
            />
          ))}
        </div>

      </>
    );
  }
  
  export default TaskList;
