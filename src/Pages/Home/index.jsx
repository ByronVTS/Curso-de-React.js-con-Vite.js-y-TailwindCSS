//este componente nos permite tener la cajita que viene desde la API
import { useContext} from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
//Hacemos el llamado del contexto
const context = useContext(ShoppingCartContext)

//Clase 27
const renderView = () => {
  if (context.filteredItems?.length > 0) {
    return (
      context.filteredItems?.map(item => (
        <Card key={item.id} data={item} />
      ))
    )
  } else {
    return (
      <div>No haber nada de lo que buscas </div>
    )
  }
}
  
    return (
      <Layout className='mb-10'>
        <div className='flex w-80 items-center relative justify-center'>
          <h1 className="font-medium text-xl m-2">Exclusive products</h1>
        </div>
        <input
         className="rounded-lg border border-black m-3 p-2 w-80 focus:outline-none" 
         type="text" 
         placeholder="Busca lo que quieras" 
         onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        <div className="grid grid-cols-4 gap-10 w-full max-w-screen-lg">
          {renderView()}
        </div>
          <ProductDetail/>
      </Layout>
  )
}

export default Home
