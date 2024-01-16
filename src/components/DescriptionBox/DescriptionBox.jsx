import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
    <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
    </div>
      <div className="descriptionbox-description">
        <p>
        E-commerce (electronic commerce) is the exchange of goods and services and the transmission of funds and data over the internet. E-commerce relies on technology and digital platforms, including websites, mobile apps and social media to make buying and selling possible
        </p>
        <p>
        Ecommerce works by connecting buyers and sellers using various electronic channels. For example, you need a channel, such as a website or social media, so customers can find products and services to purchase. Then a payment processor enables the exchange of the goods or services. Once the transaction succeeds, the customer receives a confirmation email or SMS, and a printable receipt.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
