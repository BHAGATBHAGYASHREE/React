import React, { useEffect, useState } from 'react'
import styles from './UpdateProduct.module.css'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
  let [product, setProduct] = useState({})
  let params = useParams()

  useEffect(() => {
    fetch("http://localhost:3000/products/" + params.id, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [params.id])

  function handleInput(event) {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  function handleUpdate(event) {
    event.preventDefault();
    fetch("http://localhost:3000/products/" + params.id, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product updated successfully', data);
      // Optionally redirect or notify the user about the update
      window.location.href = '/products';
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <section className={styles.container}>
      <div className={styles.headers}>
        <h1 className={styles.container_title}>Update Product</h1>
        <a href="/products">
        <i className={'fa-solid fa-list '+styles.viewBtn}></i>

        </a>
      </div>

      <form className={styles.form} onSubmit={handleUpdate}>
        <input className={styles.inp} value={product.name || ''} type="text" required placeholder='Enter Name' name='name'
          onChange={handleInput}
        />
        <input className={styles.inp} value={product.price || ''} type="text" required placeholder='Enter Price' name='price'
          onChange={handleInput}
        />
        <input className={styles.inp} value={product.quantity || ''} type="text" required placeholder='Enter Quantity' name='quantity'
          onChange={handleInput}
        />
        <input className={styles.inp} value={product.imageURL || ''} type="text" required placeholder='Enter Image URL' name='imageURL'
          onChange={handleInput}
        />
        <input className={styles.inp} value={product.category || ''} type="text" required placeholder='Enter Category' name='category'
          onChange={handleInput}
        />
        <button className={styles.btn} type='submit'>Update Product</button>
      </form>
    </section>
  )
}

export default UpdateProduct;
