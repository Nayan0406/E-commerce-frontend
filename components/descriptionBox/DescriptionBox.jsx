import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitated and buying and selling of products or services over the internet and serves as a virtual marketplace where business and individual that showcase their product, interact with customers, and conduct the transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their accessibility, and the global reach they offer.</p>
        <p>E-coomerce websites typically display products or service a detailed descriptions, images, prices, and any available varient. Each product usually has its own details with relevant infromation.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
