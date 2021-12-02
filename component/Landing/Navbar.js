import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap  p-3 '  style={{ backgroundColor: "#6900fa" }} >
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
           <img src="/logo.png" className="w-16 "/>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              PRODUCTION
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-purple-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full rounded-full py-3 px-6  text-white font-bold items-center justify-center hover:bg-white hover:text-black '>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full rounded-full py-3 px-6  text-white font-bold items-center justify-center hover:bg-white hover:text-black'>
               Articles
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full rounded-full py-3 px-6  text-white font-bold items-center justify-center hover:bg-white hover:text-black'>
                About me
              </a>
            </Link>
            <Link href=''>
              <a className='lg:inline-flex lg:w-auto w-full rounded-full py-3 px-6  text-white font-bold items-center justify-center hover:bg-white hover:text-black'>
              Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar