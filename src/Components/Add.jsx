import { useState } from 'react';
import {addShoe} from '../api/api';
const Add = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    price: 0,
   
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    addShoe(newProduct);
    setNewProduct({
      name: '',
      imageUrl: '',
      price: 0,
      
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
         Name:
        <input
          type="text"
          value={newProduct.name}
          onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}
        />
      </label>
      <br/> <br/>
      <label>
        Image URL:
        <input
          type="text"
          value={newProduct.imageUrl}
          onChange={(event) => setNewProduct({ ...newProduct, imageUrl: event.target.value })}
        />
      </label>
      <br/> <br/>
      <label>
        Price:
        <input
          type="number"
          value={newProduct.price}
          onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
        />
      </label>
     
      <br/>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default Add;