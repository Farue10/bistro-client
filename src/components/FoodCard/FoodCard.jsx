
const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 p-2 rounded-lg">${price}</p>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4">Add to Car</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;