import "./style.css"
import { useContext } from "react"
//Importamos el icono en con su nombre directamente como si fuese un componente 
import {XCircleIcon} from  '@heroicons/react/24/solid'
import { ShoppingCartContext } from "..//../Context"
import OrderCard from "../../Components/OrderCard"
import { totalPrice } from "../../utils" // agregado de la clase 20 


const CheckoutSideMenu = () => {
const context = useContext(ShoppingCartContext)

//el handelete fue echo en la clase 19 
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setcartProducts(filteredProducts)
    }
        // Clase 21
    const handleCheckout = () =>    {
        const orderToAdd = {
            date: "7/11/2023",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice:totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([]) // limpiamos la lista 
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

            {/* agregado de la clase 20 */}
            <div className="px-6  ">
                <div className="px-6">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2x1"> ${totalPrice(context.cartProducts)}</span>
                </p>
                {/* Clase 21 */}
                <button className= "bg-black w-full py-3 text-white  rounded-lg "onClick={() => handleCheckout()}>Checkout</button>
                </div>

            </div>
        </aside>
    )
}

export default CheckoutSideMenu