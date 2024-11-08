import React, { useState } from "react";

export const QuintoComponente = () => {
  const [showImage, setShowImage] = useState(false); // Estado para controlar si la imagen debe mostrarse

  // Función que maneja el clic en el botón y muestra la imagen
  const handleClick = () => {
    setShowImage(true); // Muestra la imagen al hacer clic en el botón
  };

  return (
    <div>
      {/* Botón que muestra la imagen */}
      <button onClick={handleClick} style={buttonStyle}>
        <span>Clikeame</span>
      </button>

      {/* Este bloque solo se muestra si el estado showImage es verdadero */}
      {showImage && (
        <div style={imageContainerStyle}>
          <img
            src="https://i.pinimg.com/550x/e9/31/79/e931799b6975565ee6afc19479ca8ccf.jpg"
            alt="Imagen"
            style={imageStyle}
          />
        </div>
      )}
    </div>
  );
};

// Estilos para el botón y la imagen dentro
const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  width: "200px", // Ajusta el tamaño del botón
};

const imageStyle = {
  width: "100%",
  maxWidth: "500px", // Ajusta el tamaño máximo de la imagen
  height: "auto",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const imageContainerStyle = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
};

export default QuintoComponente;
