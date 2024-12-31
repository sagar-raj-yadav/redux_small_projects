import { useState, useEffect } from 'react';
import axios from 'axios';
import {  useDispatch } from 'react-redux'
import { addTocart } from '../redux/cartslice'; 
import { useNavigate } from 'react-router-dom';

// Define product state interface
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


const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductState[]>([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Function to limit description to 10 words
const truncateDescription = (desc: string, wordLimit: number) => {
    const words = desc.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return desc;
  };

  const dispatch = useDispatch();

  const dispatchFunction=(data:ProductState)=>{
    dispatch(addTocart(data));

  }

  const navigate=useNavigate();

  return (
    <>
    <button style={style.cartbutton} onClick={() => navigate('/cart')}>Go to Cart (0)</button>
    
    <div style={style.container}>



      {products.map((data) => (
        <div key={data.id} style={style.productCard}>
          <img src={data.image} alt={data.title} style={style.img} />
          <h2 style={style.title}>{data.title}</h2>
          <p style={style.description}>   {truncateDescription(data.description, 10)}</p>
          <p style={style.category}>{data.category}</p>
          <div style={style.rating}>
            <p>Rating: {data.rating.rate}</p>
            <p>{data.rating.count} Reviews</p>
          </div>
          <button style={style.button} 
          onClick={()=>dispatchFunction(data)}>Add to cart</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;

const style: { container: React.CSSProperties; productCard: React.CSSProperties; img: React.CSSProperties; 
    title: React.CSSProperties; description: React.CSSProperties; category: React.CSSProperties; 
    rating: React.CSSProperties, button: React.CSSProperties,cartbutton:React.CSSProperties } = {
  container: {
    padding: '10px',
    display: 'grid',  
    gridTemplateColumns: 'repeat(5, 1fr)',  
    gap: '20px',  
    justifyItems: 'center', 
    alignItems: 'start', 
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    width: '100%',  
  },
  img: {
    width: '50%',
    height: '100px',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
  },
  category: {
    fontStyle: 'italic',
    color: '#888',
  },
  rating: {
    marginTop: '10px',
  },
  button: {
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: 'skyblue',
    fontSize: '18px',
    borderRadius: '20px',
    color: 'red',
    fontWeight: 'bold',
  },
  cartbutton:{
    borderRadius:"10px",
    padding:"10px",
    fontSize:"20px",
    fontWeight:"bold",
    color:"red",
    backgroundColor:"greenyellow",
    cursor:"pointer"
  }
};