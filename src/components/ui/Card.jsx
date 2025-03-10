export function Card({ children, className = "" }) {
    return (
      <div className={`bg-white shadow-lg rounded-xl border border-gray-200 p-6 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  