import React from 'react'
import CardRestaurants from './CardRestaurants'


const index = () => {
    return (
        <>
            <div className='p-14'>
                <h2 className='text-2xl font-bold mb-4'><span className='text-main'>All</span> Restaurants</h2>
                <CardRestaurants />
            </div>
        </>
    )
}

export default index