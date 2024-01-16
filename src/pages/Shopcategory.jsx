import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../components/Item/Item';
import './Shopcategory.css'

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className='shopcategory-logo-container'> 
      <img className='shopcategory-logo' src={props.image} alt="" />
      </div>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <IoIosArrowDropdown />
        </div>
      </div>
      <div className="shopcategory-products">
         {all_product.map((item, i) => {
          if(props.category === item.category) {
       return<Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
export default Shopcategory;