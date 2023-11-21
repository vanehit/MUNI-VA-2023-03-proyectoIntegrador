import { useState } from "react";
import './TaskForm.css';


//declaramos la función task form con sus propiedades y un id unico para cada tarea 
function TaskForm({ tasks, setTasks }) {
  // Estado local para el formulario
  const [form, setForm] = useState({ id: 0, name: "", complete: false });

  function addTask(event) {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    // Verificamos si el campo 'name' no está vacío antes de agregar la tarea
    if (form.name.trim() === "") {
      alert("Por favor, ingresa una tarea válida.");
      return;
    }

    setTasks((prevTasks) => {
      const storedTasks = [...prevTasks, form];
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      return storedTasks;
    });

    setForm({ id: 0, name: "", complete: false });
  }

  return (
    <div className="container mt-4">
      <form className="form-container" onSubmit={(event) => addTask(event)}>
        <div className="mb-3 row">
          <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2"></label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingresar Tareas"
              value={form.name}
              onChange={(event) => {
                setForm({ ...form, id: tasks.length + 1, name: event.target.value });
              }}
            />
          </div>
          <div className="col-sm-2">
            <button className='btn btn-primary btn-add' type="submit">Agregar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
