import styles from './Navigation.module.css'
import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            ITM
        </div>

        <div className={styles.nav}>
            <ul className={styles.navLinks}>
                <li><Link to='/home'>Home</Link> </li>
                <li><Link to='/about'>About</Link> </li>
                <li><Link to='/service'>Service</Link> </li>
            </ul>
        </div>
    </header>
  )
}

export default Navigation