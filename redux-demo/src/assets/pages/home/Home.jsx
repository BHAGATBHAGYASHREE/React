import styles from './Home.module.css'
import Navigation from '../../components/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../../slices/userSlice'

function Home() {
     let username=useSelector((state)=>{return state.user.value})
     let productname=useSelector((state)=>{return state.product.value})
     let dispatch = useDispatch()
  return (
    <>

    <Navigation></Navigation>
    <div className={styles.container}> {username}  Home</div>
    <button onClick={()=>{
        dispatch(changeName("Binod"))
        }}>Change Redux </button>
   <button onClick={()=>{
        dispatch(changeName("Binod"))
        }}>Change Redux </button>
    </>
  )
}

export default Home