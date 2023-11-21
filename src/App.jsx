import { useEffect, useState } from 'react';
import './App.css';
import TaskList from "./components/TaskList/TaskList.jsx"
import TaskForm from './components/TaskForm/TaskForm.jsx';


function App() {
  // Estado local para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Obtenemos las tareas almacenadas del localStorage, si no hay ninguna, asignamos un array vacío
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Imprimimos las tareas almacenadas en la consola
    console.log("Stored tasks from localStorage:", storedTasks);
    
    // Por ejemplo, mostrar un mensaje
    alert("La lista de tareas se ha actualizado");

    // Actualizamos el estado local 'tasks' con las tareas almacenadas
    setTasks(storedTasks);
  }, []);

  // Función para marcar una tarea como completada
  const handleTaskComplete = (taskId) => {
    // Marcamos la tarea completada
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, complete: !task.complete } : task
    );
    // Actualizamos el estado local 'tasks' con las tareas actualizadas
    setTasks(updatedTasks);
  };
    
  // Función para eliminar una tarea
  const handleTaskDelete = (taskId) => {
    // Filtramos la tarea que se eliminará
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
     // Actualizamos el estado local 'tasks' con las tareas actualizadas (sin la tarea eliminada)
    setTasks(updatedTasks);

    // Actualizamos el localStorage sin borrar las tareas almacenadas
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

   // Contar el número total de tareas
   const totalTasks = tasks.length;

   // Contar el número de tareas pendientes
   const pendingTasks = tasks.filter((task) => !task.complete).length;

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Mi App de Tareas</h2>
        </div>
        
        <div className="card-body">

          <div className='counter-task'>
            <h3>N° de Tareas: <span>{totalTasks}</span></h3>
            <h3>Pendientes:<span>{pendingTasks}</span></h3>
          </div>
          
          {/* Componente que agrega nuevas tareas */}
          <TaskForm tasks={tasks} setTasks={setTasks} />
          {/* Componente que muestra la lista de tareas */}
          <TaskList tasks={tasks} taskComplete={handleTaskComplete} taskDelete={handleTaskDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
