

export const ProductCard = ({ image, title, price, stock }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 max-w-xs">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-500">Disponibles: {stock}</p>
      <p className="text-xl font-bold mt-2">${price}.00</p>
    </div>
  );
};
