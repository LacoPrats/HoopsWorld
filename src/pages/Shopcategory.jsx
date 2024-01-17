import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../components/Item/Item';
import './Shopcategory.css';

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortOrder, setSortOrder] = useState(null); // Estado para rastrear el orden de clasificación

  // Función para mostrar/ocultar las opciones de ordenación al hacer clic en "Sort by"
  const handleSortToggle = () => {
    setShowSortOptions(!showSortOptions);
  };

  // Función para cambiar el orden de clasificación al seleccionar una opción
  const handleSortOptionClick = (order) => {
    setSortOrder((prevOrder) => (prevOrder === order ? null : order)); // Desactiva si ya está activado
    setShowSortOptions(false);
  };

  // Función de comparación para ordenar productos por precio
  const compareByPrice = (a, b) => {
    const priceA = parseFloat(a.new_price);
    const priceB = parseFloat(b.new_price);

    if (sortOrder === 'asc') {
      return priceA - priceB;
    } else if (sortOrder === 'desc') {
      return priceB - priceA;
    } else {
      return 0; // No aplicar orden si sortOrder es null
    }
  };

  // Texto dinámico para mostrar en "Sort by"
  const sortText = sortOrder === 'asc' ? 'Low Price' : (sortOrder === 'desc' ? 'High Price' : 'Sort by');

  // Filtrar y ordenar productos antes de mostrarlos
  const filteredAndSortedProducts = all_product
    .filter((item) => props.category === item.category)
    .sort(compareByPrice);

  return (
    <div className='shop-category'>
   <div className='shopcategory-logo-container'> 
      <img className='shopcategory-logo' src={props.image} alt="" />
      </div>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {filteredAndSortedProducts.length} products
        </p>
        <div className="shopcategory-sort" onClick={handleSortToggle}>
          {sortText} <IoIosArrowDropdown />
          {showSortOptions && (
            <div className="sort-options">
              {sortOrder !== 'asc' && <div onClick={() => handleSortOptionClick('asc')}>Low Price</div>}
              {sortOrder !== 'desc' && <div onClick={() => handleSortOptionClick('desc')}>High Price</div>}
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredAndSortedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
