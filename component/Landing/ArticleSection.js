import Link from 'next/link';


 export default function ArticleSection() {
     return (
 <>
  <section className="py-28  bg-blue-800" id="profile " style={{ backgroundColor: "#6900fa" }}>
            <div className="container mx-auto px-10 2xl:px-0 ">
              
                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                       <h2 className="text-6xl "> OUR</h2>
                       <h3 className="text-6xl text-pink-50">FEATURES</h3>
                    </div>
                    <div className="md:w-7/12 w-full px-10 grid grid-cols-2 gap-4 text-pink-50 font-mono ">
              <a className="rounded transform transition duration-500 hover:scale-110" href="https://www.shutterstock.com/g/Dmqin">                        Photograph      <img src="/camera.jpg"  />  </a> 
             <a className="rounded transform transition duration-500 hover:scale-110"  href="/mini-game">                                                  Mini-games      <img src="/games.jpg" />  </a>
           <a className="rounded transform transition duration-500 hover:scale-110"    href=" https://dmqin.wordpress.com/">                               Articles        <img src="/news.jpg" />  </a>  
            <a className="rounded transform transition duration-500 hover:scale-110"   href="https://open.spotify.com/user/dimqin2004?si=f63b2c7c02b7403c"> Music          <img src="/music.jpg" />  </a>  

                    </div>
                   
                </div>
            </div>
        </section>
</>
     )
 }