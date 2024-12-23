import PropTypes from "prop-types";

interface FirstAppProps {
  nombre: string;
  apellidos: string;
}

const FirstApp = ({
  nombre,
  apellidos = "No enviados aún",
}: FirstAppProps)=> {
  return (
    <div>
      <h1>{nombre} {apellidos}</h1>
    </div>
  );
};

// Definición de PropTypes
FirstApp.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
};

export default FirstApp;
