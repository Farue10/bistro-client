import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu,SetMenu]=useState([])
    const [loding,SetLoding]=useState(true)

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>
            SetMenu(data),
            SetLoding(false))
    },[])
    return [menu,loding]
};

export default useMenu;