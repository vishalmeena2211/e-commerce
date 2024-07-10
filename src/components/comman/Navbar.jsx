import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto border-box">

        <NavLink to="/">
          <div className="ml-5 text-slate-100">
          <p className="font-bold text-lg"><span className="text-green-500 text-xl">E</span>-<span className="text-green-500 text-xl">C</span>ommers</p>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
           
            <NavLink to="/">
              <p>Features</p>
            </NavLink>
            <NavLink to="/">
              <p>Pricing</p>
            </NavLink>
            <NavLink to="/">
              <p>About Us</p>
            </NavLink>
            <NavLink to="/login">
              <p>Login</p>
            </NavLink>
            <NavLink to="/signup">
              <p>SignUp</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
