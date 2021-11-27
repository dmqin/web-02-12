import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
 <Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>


 </Head>
 
  return <Component {...pageProps} />



}

export default MyApp
