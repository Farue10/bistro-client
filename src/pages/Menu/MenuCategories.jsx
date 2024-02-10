import { Link } from "react-router-dom";
import MenuItem from "../../Shared/Menuitem/MenuItem";

const MenuCategories = ({ items,title }) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <div className="w-60 mx-auto mb-10">
     <Link to={`/order/${title}`} >
        <button className="btn btn-outline border-0 border-b-4 uppercase">
          ORDER YOUR FOVURITE FOOD
        </button>
      </Link>
     </div>
    </div>
  );
};

export default MenuCategories;
