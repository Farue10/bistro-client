
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg1 from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategories from './MenuCategories';


const Menu = () => {
    const [menu]= useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet> <title>Bistro Boss | Menu</title></Helmet>
            <Cover img={menuImg1} title={'Our Shop'} subTitle={'Would you like to try a dish'}></Cover>
            <SectionTitle heading={'Today Offers'} SubHeading={'---Do Not miss'}></SectionTitle>
            <MenuCategories items={popular} title='popular'></MenuCategories>

          
            
            <Cover img={dessertImg} title={'DESSERT'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories items={dessert} title='dessert'></MenuCategories>
           
            

            <Cover img={pizzaImg} title={'PIZZA'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories items={pizza} title='pizza'></MenuCategories>
          



            <Cover img={saladImg} title={'SALAD'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories items={salad} title='salad'></MenuCategories>
         


            <Cover img={soupImg} title={'SOUP'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories items={soup} title='soup'></MenuCategories>
           


            <Cover img={saladImg} title={'OFFERD'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            <MenuCategories items={offered} title='offered'></MenuCategories>    

        </div>
    );
};

export default Menu;