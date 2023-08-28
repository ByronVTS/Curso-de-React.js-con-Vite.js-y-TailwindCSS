import PropTypes from 'prop-types'; // Importa PropTypes desde la biblioteca

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center mt-20'>
          {children}
    </div>
  );
};

// Agrega la validación de PropTypes para la prop children
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Puede ser cualquier tipo de nodo React (componentes, elementos, texto, etc.)
};

export default Layout;
