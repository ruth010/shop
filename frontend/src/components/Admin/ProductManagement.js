import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductSrc, setNewProductSrc] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      const productList = response.data;
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('/api/products', {
        name: newProductName,
        price: newProductPrice,
        src: newProductSrc
      });
      // console.log(newProductName);
      // console.log(newProductPrice);
      // console.log(newProductSrc);
      const newProduct = response.data;
      setProducts([...products, newProduct]);
      // Sau khi thêm mới sản phẩm, đặt lại các giá trị trống
      setNewProductName('');
      setNewProductPrice('');
      setNewProductSrc('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  const updateProductLocally = (productId, field, value) => {
    const updatedProducts = products.map(product =>
      product._id === productId ? { ...product, [field]: value } : product
    );
    setProducts(updatedProducts);
  };
    

  const updateProduct = async (productId, newName, newPrice, newSrc) => {
    try {
      await axios.put(`/api/products/${productId}`, {
        name: newName,
        price: newPrice,
        src: newSrc
      });
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <div>
        <input type="text" placeholder="Product Name" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
        <input type="text" placeholder="Product Price" value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} />
        <input type="text" placeholder="Product Image Src" value={newProductSrc} onChange={(e) => setNewProductSrc(e.target.value)} />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <input type="text" value={product.name} onChange={(e) => updateProductLocally(product._id, 'name', e.target.value)} />
              <input type="text" value={product.price} onChange={(e) => updateProductLocally(product._id, 'price', e.target.value)} />
              <input type="text" value={product.src} onChange={(e) => updateProductLocally(product._id, 'src', e.target.value)} />
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
              <button onClick={() => updateProduct(product._id, product.name, product.price, product.src)}>Update</button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;