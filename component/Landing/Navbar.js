import Link from "next/link";
import style from "../../styles/Navbar.module.css";


export default function Navbar() {
   
   return (
     <>
       <div>
      
         <nav className={style.navStyle}>
           <div className={style.navContainer}>
             {/* <a className={style.navLink}> */}
             <a style={{ width: "10%", height: "70%", padding: "10px", color:"white" }}>
              LOGO
             </a>
             {/* </a> */}
 
             {/* <div>
               <FaBars />
             </div> */}
             <ul className={style.navMenu}>
               <li className={style.navItem}>
                 <Link href="/home">
                   <a
                     className={style.navLink}
                     
                   >Home</a>
                 </Link>
               </li>
               <li className={style.navItem}>
                 <a className={style.navLink}>Work</a>
               </li>
               <li className={style.navItem}>
                 <a className={style.navLink}>Contact</a>
               </li>
               <li className={style.navItem}>
                 <a className={style.navLink}>About</a>
               </li>
             </ul>
             <nav className={style.navBtn}>
               <a className={style.navBtnLink}>Sign Up</a>
               <Link href="/login">
                 <a className={style.navBtnLink}>Login</a>
               </Link>              
             </nav>
           </div>
         </nav>
       </div>
 
       
     </>
   );
 }