

const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div>
            <div className="flex space-x-4 gap-3 mb-2 mr-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] " src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
            
        </div >
        </div>
    );
};

export default MenuItem;