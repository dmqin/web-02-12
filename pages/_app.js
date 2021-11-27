import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
 <Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@700&display=swap" rel="stylesheet"></link>

 </Head>
 
  return <Component {...pageProps} />



}

export default MyApp
