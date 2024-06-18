import { useState, useEffect } from 'react'
import styles from './ShowProduct.module.css'
import { Link, useParams } from 'react-router-dom';

function ShowProduct() {

    let [product, setProduct] = useState({});

    let params = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/products/" + params.id, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <h1 className={styles.container_title}>Product Info</h1>
            <Link to="/products"><i className={"fa-solid fa-arrow-left-long " + styles.viewBtn}></i></Link>
            </div>
            <div className={styles.pro_info}>
                <img src={product.imageURL} className={styles.pro_img}></img>
                <div className={styles.pro_details}>
                    <h1 className={styles.pro_name}>{product.name}</h1>
                    <h3 className={styles.pro_price}>Price: ₹{product.price}</h3>
                    <h3 className={styles.pro_quantity}>Quantity: {product.quantity}</h3>
                    <h3 className={styles.pro_category}>Category: {product.category}</h3>
                </div>
            </div>

        </div>
    )
}

export default ShowProduct