import {XCircleIcon} from  '@heroicons/react/24/solid'



const OrderCard = props => {
    const { title, price, imgURL } = props; // Corregido de imgeURL a imgURL

    return(
        <div className="flex justify-between  items-center mb-4">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgURL} alt={title} />
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XCircleIcon className='w-10 h-8 text-red-500 cursor-pointer'></XCircleIcon>
            </div>
        </div>
    )
}

export default OrderCard