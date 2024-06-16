function Product(props){
    return (
        <div className="product">
     {/* <h1>{props.name}</h1> */}
     <div className="pro-img">
       <img className="img" src={props.imgUrl}/>
       </div>
       <div className="details">
        <h1>{props.name}</h1>
        <h1>&#8377;{props.price}</h1>


       </div>
        </div>

    )
}
export default Product
