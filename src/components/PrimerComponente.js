import React, { useState, useEffect } from 'react';

export const PrimerComponente = () => {
  // Declaramos una variable de estado 'mensaje' y su función de actualización 'setMensaje'
  const [mensaje, setMensaje] = useState("BUENOS DIAS");

  // useEffect se ejecuta cuando el componente se monta y cada vez que 'mensaje' cambie
  useEffect(() => {
    console.log("Componente montado o mensaje actualizado:", mensaje);

    // función de limpieza si fuera necesario
    return () => {
      console.log("Componente desmontado o limpiando efecto.");
    };
  }, [mensaje]); // El efecto se ejecuta cada vez que 'mensaje' cambie

  // Función para cambiar el mensaje
  const cambiarMensaje = () => {
    setMensaje("MONDONGO");
  };

  return (
    <div>
      <h1>{mensaje}</h1>
      <button onClick={cambiarMensaje}>Cambiar mensaje</button>
    </div>
  );
};

export default PrimerComponente;