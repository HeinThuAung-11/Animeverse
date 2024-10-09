type CardProps = {
  image?: string | null;
  rating?: number | null;
  title?: string | null;
  synopsis?: string | null;
};
export const Card = ({ image, rating, title, synopsis }: CardProps) => {
  return (
    <div className="max-w-sm mx-2 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[250px] h-[400px]">
      <div className="relative group">
        <img className="w-full h-[400px]" src={image ?? " "} alt={title || ""} />

        <div className="absolute inset-0 text-white bg-gray-900 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
          <h5>{title}</h5>
          <p>Rating - {rating}</p>
          <p className="overflow-hidden line-clamp-3">{synopsis}</p>
        </div>
      </div>
      <div className="p-2">
        <div className="font-bold text-sm mb-2 text-center w-[250px]">{title}</div>
      </div>
    </div>
  );
};
