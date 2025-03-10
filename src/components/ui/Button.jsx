export function Button({ children, onClick, className = "", type = "button" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ${className}`}
      >
        {children}
      </button>
    );
  }
  