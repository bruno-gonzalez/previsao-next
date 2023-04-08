import styles from "./Rodape.module.css"

export default function Rodape() {
   return(
      <footer className={styles.rodape}>
         <h3>Desenvolvido por <a href="https://github.com/bruno-gonzalez">Bruno Torres</a></h3>
      </footer>
   )
}