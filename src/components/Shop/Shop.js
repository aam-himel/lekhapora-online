import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import coursesData from '../../courseData/courseData';
import './Shop.css'

const Shop = () => {
    const [courses, setCourses] = useState(coursesData);
    const [cart, setCart] = useState([]);

    const handleEnroll = (course) => {
        const newCart = [...cart,course];
        setCart(newCart);
    }


    return(

        
       <div className="shop">
           <h1 className="text-center course-main-title">Courses</h1>
           <div className="shop-container ">
           
            <div className="courses-sec row">
                {
                    courses.map((c) => 
                    <Course 
                            key={c.id} 
                            course={c}
                            handleEnroll = {handleEnroll}
                        />
                    )
                }
            </div>
            <div className="cart-sec">
                <Cart cart={cart} />
            </div>
           </div>
       </div>
    );
}

export default Shop;
