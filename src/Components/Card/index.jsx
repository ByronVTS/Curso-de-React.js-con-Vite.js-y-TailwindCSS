import { useContext } from "react"
import { ShoppingCartContext } from "..//../Context"
// import {ShoppingBagIcon} from  '@heroicons/react/24/solid'
import {PlusIcon} from  '@heroicons/react/24/solid'

const Card = (data) => {
    // tener en cuenta que el context es donde es contenido el proveedor con toda las funciones y para usar esas funciones necesitamos tenemos que colocar asi onClick={()=> context.openProductDetail()}
    const context = useContext(ShoppingCartContext)
    // creamos una constante con las funciones que necesitamos, en este caso el que habre el productDetail y otra donde manda la informacion para mostrar
    const showProduct = (producDetail) => {
        context.openProductDetail(),
        context.setProductToShow(producDetail)
    }
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={()=> showProduct(data.data) }
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs p-1 m-2'>{data.data.category.name}</span>
                <img src={data.data.images} alt={data.data.title} className="object-cover h-[100%] w-full rounded-lg"  />
                <div
                className='absolute top-0 right-0 flex justify-center items-center bg-slate-300 w-6 h-6 rounded-full m-2 p-1'
                onClick={()=> context.setCount(context.count+1)}>
                <PlusIcon className='h-6 w-6 '></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-bold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card