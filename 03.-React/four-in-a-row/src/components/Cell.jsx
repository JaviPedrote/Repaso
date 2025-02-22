

const Cell = ({ value, onClick }) => {
    return (
      <div 
        className="w-12 h-12 border-2 border-white flex justify-center items-center rounded-full bg-gray-500 cursor-pointer"
        onClick={onClick}
      >
        {value && (
          <div className={`w-10 h-10 rounded-full ${value === "red" ? "bg-red-500" : "bg-yellow-500"}`} />
        )}
      </div>
    );
  };
  
  export default Cell;
  