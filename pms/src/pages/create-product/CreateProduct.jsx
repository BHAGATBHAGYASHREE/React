import { useState } from 'react'
import styles from'./CreateProduct.module.css'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {

    let [product,setProduct] = useState({})
    let navigate=useNavigate()

    function handleInput()
    {
        setProduct({...product,[event.target.name]:event.target.value})
    }


    function handleSubmit()
    {
        event.preventDefault()
        
        fetch("http://localhost:3000/products",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{
           navigate('/products')
            return response.json()
        })
        .then((data)=>{

            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
            }


  return (
    

    <section className={styles.container}>
          <div className={styles.headers}>
         <h1 className={styles.container_title}>Add Product</h1>
         <a href="/products">
            <i className={'fa-solid fa-circle-plus '+styles.viewBtn}></i>
         </a>
         </div>



        <form className={styles.form} onSubmit={handleSubmit}>

            <input className={styles.inp} type="text" required placeholder='Enter Name' name='name' defaultValue={product.name}
            onChange={handleInput} 
            />
            <input className={styles.inp} type="text" required placeholder='Enter Price' name='price' defaultValue={product.price}
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" required placeholder='Enter Quantity' name='quantity' defaultValue={product.quantity}
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" required placeholder='Enter Image URL' name='imageURL' defaultValue={product.imageURL}
            onChange={handleInput}
            />
            <input className={styles.inp} type="text" required placeholder='Enter Category' name='category' defaultValue={product.category}
            onChange={handleInput}
            />

            <button className={styles.btn} type='submit'>Add Product</button>

          



        </form>


    </section>


  )
}

export default CreateProduct