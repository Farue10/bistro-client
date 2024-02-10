import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/Menuitem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu()
    const popular = menu.filter(item => item.category === 'popular')
  
    return (
       <section className="mb-12">
        <SectionTitle  SubHeading={'---check it Out---'} heading={'From Our Menu'}></SectionTitle>
        <div className="grid grid-cols-2">
            {
                popular.map(item=> <MenuItem key={item._id} item={item}>
                </MenuItem>)
            }
        </div>
       </section>
    );
};

export default PopularMenu;