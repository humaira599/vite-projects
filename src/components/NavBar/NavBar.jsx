import { Menu, X } from "lucide-react";
import Links from "./Links";
import { useState } from "react";

const navLinks = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact" },
];


const NavBar = () => {
            const[open, setOpen] = useState (false);
  const links =  navLinks.map(route => <Links key ={route.id} route={route}></Links>)


    return (
        <nav className="flex justify-between mx-10 mt-6">
          <span className="flex" onClick={() => setOpen(!open)}>
         {
          open? <X className='md:hidden'></X> :
          <Menu className='md:hidden'></Menu>
         }
            <ul className={`md:hidden absolute duration-1000 text-black
           ${open? 'top-8': '-top-40'}
               *:bg-blue-300`}>
          {
            links
          }
         </ul>
         <h3 className="ml-4">My Navbar</h3>
         </span>
        
         <ul className="md:flex hidden">
          {
            links
          }
         </ul>
         
         

             {/* <ul className="flex">
             {
                navLinks.map(route => <li className="mr-10"><a href={route.path}>{route.name}</a></li>)
             }
             </ul> */}

            {/* <ul className="flex">
                <li className="mr-10"><a href="/">Home</a></li>
                <li  className="mr-10"><a href="/about">About</a></li>
                <li  className="mr-10"><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign Up</button>
        </nav>
    );
};

export default NavBar;