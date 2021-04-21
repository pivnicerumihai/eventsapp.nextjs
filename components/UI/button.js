import Link from "next/link";
import styles from "./button.module.css";

function Button({ children, link, onClick }) {
  if(link){
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }
  else{
    return(
      <button className={styles.btn}onClick={onClick}>{children}</button>
    )
  }
 
}

export default Button;
