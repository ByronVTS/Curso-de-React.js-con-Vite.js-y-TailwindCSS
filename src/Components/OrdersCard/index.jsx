// todo nuevo de la clase 23 

import {XMarkIcon } from  '@heroicons/react/24/solid'



const OrdersCard = props => {
    const {totalProducts,  totalPrice} = props 

    return(
        <div className="flex justify-between  items-center mb-3 border border-black">
            <p>
                <span>01.02.2023</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard