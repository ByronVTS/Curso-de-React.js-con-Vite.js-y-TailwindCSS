import { XMarkIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
  const { totalProducts, totalPrice } = props;

  // Obtener la fecha actual
  const currentDate = new Date();

  // Formatear la fecha como dd.mm.yyyy
  const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

  return (
    <div className="flex justify-around items-center m-2">
  <p>
    <span className="mr-10">${totalPrice}</span>
    <span className="mr-10">{totalProducts} productos</span>
    <span>{formattedDate}</span>
  </p>
</div>


  );
};

export default OrdersCard;
