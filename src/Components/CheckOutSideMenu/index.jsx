import "./style.css"
import { useContext } from "react"
//Importamos el icono en con su nombre directamente como si fuese un componente 
import {XCircleIcon} from  '@heroicons/react/24/solid'
import { ShoppingCartContext } from "..//../Context"
import OrderCard from "../../Components/OrderCard"


const ChekoutSideMenu = () => {
const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setcartProducts(filteredProducts)
    }

    return (
        <aside
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                {/* Llamamos al icono como un componente  */}
                <XCircleIcon className='w-10 h-8 text-red-500 cursor-pointer'
                onClick={()=> context.closeCheckoutSideMenu()}
                ></XCircleIcon>
                </div>
            </div>
            <div className="px-6  ">
            {
                context.cartProducts.map((product) => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imgURL={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }

            </div>
        </aside>
    )
}

export default ChekoutSideMenu