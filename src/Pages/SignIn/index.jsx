import { useContext, useState, useRef } from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info")
  const form = useRef(null)

  const account = localStorage.getItem("account");
  const parsedAccount = account ? JSON.parse(account) : {};

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    }
    console.log(data);
  }
  // Esta función devuelve el contenido que parece ser la vista de inicio de sesión
 
  const renderLogin = () => {
    return(
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
            <button className="border border-black rounded-lg mt-6 py-3" disabled={hasUserAnAccount}
            onClick={() => setView("create-user-info")}>
              Sign Up
            </button>
          </div>
    )
  }

  const renderCreateUserInfo = () => {
    return(
      <form ref={form} className="flex flex-col gap-4 w-80" >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">Tu nombre:</label>
          <input 
          type="text"
          id="name"
          name="name"
          defaultValue={parsedAccount?.name}
          placeholder="El hombre araña"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">Tu email:</label>
          <input 
          type="text"
          name="email"
          defaultValue={parsedAccount?.email}
          placeholder="peter@vengadores.ec"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">Your password:</label>
          <input type="text"
          id="password"
          name="password"
          defaultValue={parsedAccount?.password}
          placeholder="*********"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4" />
        </div>
          <Link to="../">
            <button
            className="bg-black text-white rounded-lg py-3 w-full"
            onClick={() => createAnAccount()}>
              Create
            </button>
          </Link>
      </form>
    )
  }

  //verificamos si view es igual a create-user-info vamos a renderizar rederCreateUserInfo pero si NO ES IGUAL renderiza renderLogin
  const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogin()

    return (
      <>
        <Layout>
          <h1 className="text-center w-80 mb-6 font-medium text-lg">Bienvenido a Narnia</h1>
          {renderView()}
        </Layout>
      </>
    );
}

export default SignIn;
