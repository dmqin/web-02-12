import styles from '../../styles/HeroLanding.module.css'


export default function Hero() {
    return (
    
    <div className={styles.main}>
        
        <main >
        
        
        <h1 className="font-sans font-bold text-7xl text-white mb-12">
          WELCOME TO DMQIN 
        </h1>
       <p className="font-mono text-center text-white">Next Js website with tailwind as the css by Desta Imam Muttaqin.</p>
        <div className="text-center">
       <button className={styles.Button}   >
            SIGN UP NOW
          </button>
</div>
      </main>

        
        </div>
    )
  }
  
  