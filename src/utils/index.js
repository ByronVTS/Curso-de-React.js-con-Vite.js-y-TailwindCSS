
    // This function calculates total of a new order 
    /*
    * @param {Array} products
    * @returns {numer} total price
    */

export const totalPrice  = (products) => {
        //una varaible la cual almacene todas las variables con el precio y los vaya sumando
    let sum = 0
    //recorremos cada producto de la lista de products y sumamos el precio del producto actual y lo añadimos a la varible de sum
    products.forEach(product => sum += product.price)
    return sum 
}