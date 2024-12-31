import { useSelector } from "react-redux";
import { RootStore } from '../redux/store'; // Import the RootStore type
import {  useDispatch } from 'react-redux'
import { removefromCart } from '../redux/cartslice'; 

// Define the structure of each product in the cart
interface ProductState {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Cart = () => {

    const cart = useSelector<RootStore, ProductState[]>((state) => state.cart.cart);

    const dispatch = useDispatch();

    const dispatchFunction=(id:number)=>{
      dispatch(removefromCart({id}));
  
    }

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product: ProductState) => (
            <div key={product.id} style={style.productCard}>
              <img src={product.image} alt={product.title} style={style.img} />
              <h3 style={style.title}>{product.title}</h3>
              <p style={style.description}>{product.description}</p>
              <p style={style.price}>Price: ${product.price}</p>
              <button
               style={style.removebutton}
               onClick={()=>dispatchFunction(product.id)}>Remove from cart</button>
            </div>
          ))
        )}
         
      </div>
    </div>
  );
};

export default Cart;

// Define the style object for the Cart component
const style: { productCard: React.CSSProperties; img: React.CSSProperties; 
    title: React.CSSProperties; description: React.CSSProperties; price: React.CSSProperties,removebutton:React.CSSProperties } = {
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  img: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'green',
  },
  removebutton:{
    borderRadius:"10px",
    padding:"10px",
    fontSize:"20px",
    fontWeight:"bold",
    color:"red",
    backgroundColor:"greenyellow",
    cursor:"pointer"
  }
};
