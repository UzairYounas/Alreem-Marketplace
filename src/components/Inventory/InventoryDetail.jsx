import React from 'react'

import laptop from '../../assets/images/laptop.jpg'
import mac1 from '../../assets/images/mac1.jpg'
import mac2 from '../../assets/images/mac2.jpg'
import mac3 from '../../assets/images/mac3.jpg'
import mac4 from '../../assets/images/mac4.jpg'
import mac5 from '../../assets/images/mac5.jpg'

function InventoryDetail() {

    const items = [
        {
            name: 'RGB Gradient Lighting Keyboard',
            id: 'AED 250',
            available: '4 items (only)',
            description: 'Headphones have revolutionized the way we experience audio, offering a personalized and immersive sound and  experience thats intimate and portable.',
        }
    ]

  return (
    <div className='p-3' style={{ backgroundColor: "#29292A" }}>
      <div className="row">
        <div className="col-md-7">
            <div className="br-1 p-2 d-flex align-items-center gap-4">
                <div className="d-flex flex-column gap-3 invent-det">
                        <img src={mac1} className='rounded' />
                        <img src={mac2} className='rounded' />
                        <img src={mac3} className='rounded' />
                        <img src={mac4} className='rounded' />
                        <img src={mac5} className='rounded' />
                </div>
                <img src={laptop} className='rounded' style={{width: '450px'}} />
            </div>

        </div>
        <div className="col-md-5">
            {items.map((val, index)=> (
                <div className="br-1 p-3 d-flex flex-column text-white gap-4">
                    <h4>{val.name}</h4>
                    <p style={{color: '#EEE692'}}>{val.id}</p>

                    <div className="d-flex justify-content-between">
                        <p>color</p>
                        <div className="d-flex gap-3">
                            <div className="purple" style={{backgroundColor: '#5A4B90', width: '20px', height: '20px', borderRadius: '50%'}}></div>
                            <div className="purple" style={{backgroundColor: '#80F0FF', width: '20px', height: '20px', borderRadius: '50%'}}></div>
                            <div className="purple" style={{backgroundColor: '#FF63EF', width: '20px', height: '20px', borderRadius: '50%'}}></div>
                            <div className="purple" style={{backgroundColor: '#FFEA7F', width: '20px', height: '20px', borderRadius: '50%'}}></div>
                            <div className="purple" style={{backgroundColor: '#FF7373', width: '20px', height: '20px', borderRadius: '50%'}}></div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Product Availability</p>
                        <p>{val.available}</p>
                    </div>
                    <p>Product Size</p>

                    <div className="d-flex flex-column gap-2">
                        <p style={{color: '#EEE692'}}>Product Details</p>
                        <p>{val.description}</p>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default InventoryDetail
