import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const initializeLocalStorge = () => {
  //Obtenemos el contenido de dos claves 
  const accountInLocalStorage = localStorage.getItem("account")
  const signOutInLocalStorage = localStorage.getItem("sign-out")
  //Creamos las 2 variables donde almacenamos los datos despues de procesarlos 
  let parsedAccount
  let parsedSignOut
  // verificamos si el valor obtenido de account en la consulta en localStorage  es null o undefined , de ser asi establecemos un objeto vacio  como valor  para la clave de account  utilizando "localStofrage.setItem" y asigna  tambien  un objeto vacio a "parsedAccount"
  if(!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
    //Si hay un valor para "account" en el localStorage, se utiliza JSON.parse para convertirlo de una cadena JSON a un objeto JavaScript y se asigna a parsedAccount.
  }else{
    parsedAccount = JSON.parse(accountInLocalStorage)
  }
  //se verifica si el valor obtenido de localStorage para "sign-out" es null o undefined. Si es así, se establece el valor false como cadena JSON para la clave "sign-out" utilizando localStorage.setItem, y se asigna false a parsedSignOut.
  if(!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  }else{
    //Si hay un valor para "sign-out" en el localStorage, se utiliza JSON.parse para convertirlo de una cadena JSON a un valor booleano de JavaScript y se asigna a parsedSignOut.
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}

// este export es todo todo!!!
export const ShoppingCartProvider = ({children}) => {
  
  //My account
  const [account , setAccount] = useState({}) 

  //Sign out 
  const [signOut , setSignOut] = useState(false)

  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart · Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  return (
    // El Provider nos permite tener estados globales y poder usarlo donde nos de la regalada gana :)
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      account,
      setAccount,
      signOut,
      setSignOut
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
