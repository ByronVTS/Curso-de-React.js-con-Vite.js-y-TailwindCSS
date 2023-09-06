import "./style.css"
//Importamos el icono en con su nombre directamente como si fuese un componente 
import {XCircleIcon} from  '@heroicons/react/24/solid'

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detallazos</h2>
                <div>
                {/* Llamamos al icono como un componente  */}
                <XCircleIcon className='w-7 h-6 text-red-500'></XCircleIcon>
                </div>

            </div>
        </aside>
    )
}

export default ProductDetail