import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    // vamos validar si el producDetail esta abierto o no
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    // creamos esta constante para tener esa funcion dentro del context siempre y se encargara de cambiar el valor osea actualizarlo
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    // producto detail -- Show product
    // en useStatte ponemos unas llaves por que cuando obtenemos los datos bienen en forma de objeto  
    const [productToShow, setProductToShow]= useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
