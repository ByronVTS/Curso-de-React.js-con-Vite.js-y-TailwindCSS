import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <Layout>
        <h1 className="text-center  w-80 mb-6 font-medium text-lg">Bienvenido a Narnia </h1>
        <div className="flex flex-col w-80">
          <p>
            <span className="font-light  text-sm">Email: </span>
            <span>byronthyt@platzi.com</span>
          </p>
          <p>
            <span className="font-light  text-sm">Password: </span>
            <span>*********</span>
          </p>
          <Link to="/">
            <button className="bg-black text-white w-full rounded-lg py-3 mt-4 mb-2">Login</button>
          </Link>
          <div className="text-center">
            <a href="/" className="font-light text-ms underline underline-offset-4">Forgot my password</a>
          </div>
          <button
          className="border border-black rounded-lg mt-6 py-3"
          >Sign Up</button>
        </div>
      </Layout>
    </>
  );
}

export default SignIn;
