import './CreateProduct.css'
import { useState } from 'react'
function CreateProduct() {
  
    let [product,setProduct]=useState({})

    function handleInput(){
        let copyProduct = {...product}
        copyProduct[event.target.name] = event.target.value
        setProduct(copyProduct)
    }

    function handleSubmit(){
        event.preventDefault()
        console.log(product)
    }

    return (
    <>
        <section className="form-parent" onSubmit={handleSubmit}>

            <form className='form'>
                <h1>Add Product</h1>

                {name}
                <input type="text" name='name' required placeholder='Enter Name' onChange={handleInput}/>

                <input type="text" name='price' placeholder='Price' onChange={handleInput}/>

                <input type="text" name='category' placeholder='Enter Category' onChange={handleInput} />
                
                <input type="number" name='quantity' min={10} placeholder='Enter Quantity' onChange={handleInput}/>

                <input type="text" name='description' placeholder='Description'onChange={handleInput}/>

                <button type='submit'>Submit</button>
            </form>

        </section>
    </>
  )
}

export default CreateProduct