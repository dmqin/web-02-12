import { FaTelegramPlane, FaWhatsapp, FaMailBulk, FaInstagram } from "react-icons/fa";


export default function Footer() {
 return (
   <>
<footer className="bg-gray-800 py-14" id="contact-us" >
<main >
        
        
        <h1 className="font-sans font-bold text-5xl text-white mb-12 text-center">
       CONTACT US
        </h1> 
        <div className="container mx-auto px-10 2xl:px-0 ">
              
              <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                  <div className="md:w-5/12 w-full px-15 mb-10 md:mb-0 text-white grid  ">
                      < div className="pb-20 text-2xl" >
                      <div className="mb-7  "> 
                        <a className="flex flex-wrap" href="/"  >
                          <FaMailBulk/>  <p className="ml-5 text-sm hover:underline"> dimqin2004@gmail.com </p>
                        
                        </a>
                        
                        </div>
                        <div className="mb-7 ">
                        <a  className="flex flex-wrap"  href="/"  >
                          <FaWhatsapp/>  <p className="ml-5 text-sm hover:underline">62 888 7002 211 </p>
                        </a>
                        </div>
                        <div className="mb-7">
                        <a className="flex flex-wrap"  href="/"  >
                          <FaTelegramPlane/> <p className="ml-5 text-sm hover:underline"> dimqin2004 </p>
                        </a>
                        </div>
                        <div>
                        <a className="flex flex-wrap"  href="https://www.instagram.com/dmqin/"  >
                          <FaInstagram/> <p className="ml-5 text-sm hover:underline"> dmqin </p>
                        </a>
                        </div>
                      </div>
                    
                  </div>
                  <div className="md:w-7/12 w-full px-10 mb-9 gap-4 text-pink-50 font-mono ">
                 <h2 className="text-2xl mb-7 text-center"> Subscribe Now. </h2>
                  <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >SUBSCRIBE</button>
                  </div>
                 
              </div>
          </div>
      </main>
   
      </footer>
      <div className=" text-center py-4 bg-green-400 text-white ">
  
<p className="text-center" >© 2021 | Created By Dmqin</p>
      </div>
      
</>
 )



}