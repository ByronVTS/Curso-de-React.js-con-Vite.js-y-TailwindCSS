import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  // clase 24 -- Obtener la ruta actual del navegador
const currentPath = window.location.pathname;
// Extraer el nombre del archivo de la ruta
let index = (currentPath.substring(currentPath.lastIndexOf('/') + 1));
// La variable 'index' ahora contiene el nombre del archivo de la ruta.
if(index == "last") index = context.order?.length - 1

  return (
    <Layout>
      <div className='flex w-80 items-center relative justify-center mb-4'>
            <Link to='/my-orders' className='absolute left-0'>
              <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
            </Link>
          <h1>My Orders</h1>
        </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder