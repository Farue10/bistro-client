import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import order from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu]= useMenu()
    const categories = ['salad','pizza','soup','dessert','popular','offered']  
    const {category} =useParams()
    const initalIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex]=useState(initalIndex)

    const popular = menu.filter(item => item.category === 'popular')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Cover
        img={order}
        title={"Our Shop"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>popular</Tab>      
          <Tab>offered</Tab>      
        </TabList>

        <TabPanel>
           <div className="grid grid-cols-3 gap-3">
           {
               salad.map(item=> <FoodCard key={item._id} item={item}></FoodCard>) 
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-3 gap-3">
           {
               pizza.map(item=> <FoodCard key={item._id} item={item}></FoodCard>) 
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-3 gap-3">
           {
               soup.map(item=> <FoodCard key={item._id} item={item}></FoodCard>) 
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-3 gap-3">
           {
               dessert.map(item=> <FoodCard key={item._id} item={item}></FoodCard>) 
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-3 gap-3">
           {
               popular.map(item=> <FoodCard key={item._id} item={item}></FoodCard>) 
            }
           </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-3 gap-3">
           {
               offered.map(item=> <FoodCard key={item._id} item={item}></FoodCard>) 
            }
           </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
