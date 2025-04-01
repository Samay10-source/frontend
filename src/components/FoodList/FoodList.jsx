import React from 'react'
import './FoodList.css'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'

const FoodList = ({category}) => {
    // Filter food items by category if category is provided
    const foods = category 
        ? food_list.filter(food => food.category === category)
        : food_list;
        
    return (
        <div className="food-list">
            <div className="food-list-items">
                {foods.map((food) => (
                    <FoodItem 
                        key={food._id}
                        id={food._id}
                        name={food.name}
                        price={food.price}
                        description={food.description}
                        image={food.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default FoodList