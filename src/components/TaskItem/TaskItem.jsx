import React from "react";
import './TaskItem.css'


// Definimos el componente TaskItem con sus propiedades
export default function TaskItem({ name, complete, taskComplete,taskDelete }) {
//  clase "completed" si la tarea está completa
    return (

      <>
        <div className={`list-group-item ${complete ? "completed" : ""}`}>
        {/* Mostramos el nombre de la tarea */}
          {name}
          <span>
          {/* Botón para completar la tarea, que llama a la función cuando se hace clic */}
            <button onClick={taskComplete}>
              {/* Ícono de check de color verde si la tarea está completada, si no, tiene el ícono de círculo */}
              <i className={`bi text-success ${complete ? "bi-check-circle-fill" : "bi-check-circle"}`}></i>
            </button>
            {/* Botón para eliminar la tarea*/}
            <button onClick={taskDelete}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
          </span>
        </div>
      </>
    );
  }

  