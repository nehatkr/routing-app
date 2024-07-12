import React from "react";
import './dasboard.css'
import { useNavigate } from "react-router-dom";

export default function Dasboard() {
  const navigate = useNavigate();

  return (
    <div>
      hey
      <button type="button" className="btn btn-primary"
      onClick={()=>navigate('/sign-in')}>
        Logout
      </button>
    </div>
    // <div>
    //   {/* <button onClick={()=> navigate("/product")}>Login</button> */}
    //   This is Dashboard page......
    //   <ul>
    //     <li>
    //       <NavLink to="home">Home</NavLink>
    //     </li>
    //     <li className="aline">
    //       <NavLink to="login">Login</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="product">Product</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="about">About</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="contact">Contact</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="news">News</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="school">School</NavLink>
    //     </li>
    //   </ul>
    //   <Outlet />
    // </div>
  );
}
