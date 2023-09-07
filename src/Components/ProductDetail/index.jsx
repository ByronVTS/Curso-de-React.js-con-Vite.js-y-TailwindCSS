import "./style.css"
import { useContext } from "react"
//Importamos el icono en con su nombre directamente como si fuese un componente 
import {XCircleIcon} from  '@heroicons/react/24/solid'
import { ShoppingCartContext } from "..//../Context"


const ProductDetail = () => {
const context = useContext(ShoppingCartContext)

    return (
        <aside
         className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detallazos</h2>
                <div>
                {/* Llamamos al icono como un componente  */}
                <XCircleIcon className='w-10 h-8 text-red-500 cursor-pointer'
                onClick={()=> context.closeProductDetail()}
                ></XCircleIcon>
                </div>

            </div>

            <figure className="px-6">
                <img 
                className="w-full h-full rounded-lg "
                src={context.productToShow.images} 
                alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail