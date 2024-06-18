import styles from'./NotFound.module.css'


function NotFound() {
  return (
    <div className={styles.not_found}>
        <h1>404 | Not Found</h1>
        <p>Go Back To Home</p>
    </div>
  )
}

export default NotFound