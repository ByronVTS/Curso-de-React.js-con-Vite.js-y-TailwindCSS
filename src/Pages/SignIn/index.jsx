import { useContext } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const account = localStorage.getItem("account");
  const parsedAccount = account ? JSON.parse(account) : {};

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  // Esta función devuelve el contenido que parece ser la vista de inicio de sesión
 
    return (
      <>
        <Layout>
          <h1 className="text-center w-80 mb-6 font-medium text-lg">Bienvenido a Narnia</h1>
          <div className="flex flex-col w-80">
            <p>
              <span className="font-light text-sm">Email: </span>
              <span>{parsedAccount?.email}</span>
            </p>
            <p>
              <span className="font-light text-sm">Password: </span>
              <span>{parsedAccount?.password}</span>
            </p>
            <Link to="/">
              <button className="bg-black text-white w-full rounded-lg py-3 mt-4 mb-2" disabled={!hasUserAnAccount}>
                Login
              </button>
            </Link>
            <div className="text-center">
              <a href="/" className="font-light text-ms underline underline-offset-4" >
                Forgot my password
              </a>
            </div>
            <button className="border border-black rounded-lg mt-6 py-3" disabled={!hasUserAnAccount}>
              Sign Up
            </button>
          </div>
        </Layout>
      </>
    );
}

export default SignIn;
