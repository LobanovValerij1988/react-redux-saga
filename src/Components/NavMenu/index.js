import Page2 from '../Page2';
import Page1 from '../Page1';
import Counter from '../Page3/Counter';
import {Link}  from "react-router-dom";
import "./index.css";
function NavMenu() { 
   return (  
       <> 
            <Link to="/"      className="links"> First page    {Page1}   </Link> 
            <Link to="/page2" className="links"> Second page   {Page2}   </Link>
            <Link to="/page3" className="links"> Third page    {Counter} </Link>     
       </> 
       ); 
      }
export default NavMenu;
