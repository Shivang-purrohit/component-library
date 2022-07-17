import React from 'react'
import manu from './images/manu.jpg'
export default function Cards() {
  return (
    <>
    <section className="card-container">
        
        <div className="card">
            <div className="card-img"> 
           <img src= "https://i.ytimg.com/vi/imbVMqcXwco/maxresdefault.jpg" alt="" className='img-set' />  </div>
         <div className="book-tickets">
            <a href="#"  className='button-book'>book-tickets</a>
         </div>
          
        </div>

        <div className="card2">
            <div className="card-img"> <img src="https://footballmonk.in/wp-content/uploads/2021/10/man-u-ronaldo-third-1.jpg"  alt="" className='img-set' />  </div>
            <div className="discount">
            <a href="#"  className='button-dis'>50% off!</a>
         </div>
        </div>

        <div className="card">
            <div className="card-img"> <img src="https://upload.wikimedia.org/wikipedia/en/9/94/John_Wick_Chapter_3_Parabellum.png" alt="" className='img-set' /></div>
            <div className="movie">
            <a href="#"  className='button-now'>book now</a>
         </div>
        </div>


        <div className="card2">
            <div className="card-img"> <img src="https://www.91-img.com/gallery_images_uploads/2/5/25e14af0a272fe905daa9cd6ed386f51aecdca98.jpg?w=0&h=901&q=80&c=1" alt="" className='img-set2' /></div>
            <div className="phone">
                
            <a href="#"  className='button-add-cart'  >Add to cart</a>
         </div>
         
         <h2 className='mobile-name'>Asus ROG</h2>
         <h3 className='price-tag'>Rs. 88,999</h3>
         <p className='rating'>(2000+ Ratings)</p>

        </div>



        <div className="card-flip">
            <div className="card-front"> <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" alt=""  className='img-set' /></div>
            <div className="card-back">
            <a href="#"  className='button-back'>Order Now !</a>
         </div>
        </div>

      
    </section>
    </>
  )
}
