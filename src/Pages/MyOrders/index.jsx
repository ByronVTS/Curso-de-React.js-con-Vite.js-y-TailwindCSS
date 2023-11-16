import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard" // agregado clase 23
import { ShoppingCartContext } from '../../Context'


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <>
      <Layout>  
        <div className='flex w-80 items-center relative justify-center'>
          <h1>My Orders</h1>
        </div>
        <div className='grid  gap-4'>
  {context.order.map((order, index) => (
    <Link key={index} to={`/my-orders/${index}`}>
      <div className='bg-white p-2 rounded-md shadow-md m-2'>
        <OrdersCard
          totalProducts={order.totalProducts}
          orderDate={order.date}
          totalPrice={order.totalPrice}
        />
      </div>
    </Link>
  ))}
</div>

    </Layout>
    </>
  )
}

export default MyOrders