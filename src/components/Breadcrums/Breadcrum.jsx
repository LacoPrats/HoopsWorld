import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import './Breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='breadcrum'>
      Home <FaArrowCircleRight />
      <Link to='/'>Shop</Link> <FaArrowCircleRight />
      {product.category}<FaArrowCircleRight />{product.name}    </div>
  )

};

export default Breadcrum;
