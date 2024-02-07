import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/Menuitem/MenuItem";

const PopularMenu = () => {
    const [menu,SetMenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popular = data.filter(item=> item.category === 'popular');
            SetMenu(popular)})
    },[])

    return (
       <section className="mb-12">
        <SectionTitle  SubHeading={'---check it Out---'} heading={'From Our Menu'}></SectionTitle>
        <div className="grid grid-cols-2">
            {
                menu.map(item=> <MenuItem key={item._id} item={item}>
                </MenuItem>)
            }
        </div>
       </section>
    );
};

export default PopularMenu;