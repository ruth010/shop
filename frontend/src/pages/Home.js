import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to='/ProductPage'>ProductPage</Link>
      <Link to='/UserPage'>UserPage</Link>
    </div>
  );
}

export default Home;






// import React from 'react';

// function Product() {
//   return (
//     <section className="items">
//       <div className="container">
//         <div className="heading-title">
//           <h2>NEW ITEMS</h2>
//           <p>The internationally trending products, the fashionable ladies should not miss out.</p>
//         </div>
//         <div className="row">
//           <div className="col l-3 m-6 s-12">
//             <img src="../../assets/imgs/item (1).jpeg" alt="" className="items__img" />
//             <div className="item__title">
//               <h3 className="item__title-header">Name of product</h3>
//               <span className="item__title-price">$1000</span>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="items__show">
//             <button>VIEW MORE OTHER PRODUCTS</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Product;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/api/products');
//         const productList = response.data;
//         setProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []); // Gọi chỉ một lần khi component được tạo lần đầu tiên

//   return (
//     <section className="items">
//       <div className="container">
//         <div className="heading-title">
//           <h2>NEW ITEMS</h2>
//           <p>The internationally trending products, the fashionable ladies should not miss out.</p>
//         </div>
//         <div className="row">
//           {products.map((product, index) => (
//             <div key={index} className="col l-3 m-6 s-12">
//               <img src={product.src} alt={product.name} className="items__img" />
//               <div className="item__title">
//                 <h3 className="item__title-header">{product.name}</h3>
//                 <span className="item__title-price">{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="row">
//           <div className="items__show">
//             {/* Đây là nút để tải thêm sản phẩm */}
//             <button>VIEW MORE OTHER PRODUCTS</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Product;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { json } from 'react-router-dom';

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/api/products');
//         const productList = response.data;
//         // Kiểm tra xem dữ liệu nhận được có phải là một mảng không
//         if (Array.isArray(productList)) {
//           setProducts(productList);
//         } else {
//           console.error('Error fetching products: Data is not an array');
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []); // Gọi chỉ một lần khi component được tạo lần đầu tiên

//   return (
//     <section className="items">
//       <div className="container">
//         <div className="heading-title">
//           <h2>NEW ITEMS</h2>
//           <p>The internationally trending products, the fashionable ladies should not miss out.</p>
//         </div>
//         <div className="row">
//           {products.map((product, index) => (
//             <div key={index} className="col l-3 m-6 s-12">
//               <img src={product.src} alt={product.name} className="items__img" />
//               <div className="item__title">
//                 <h3 className="item__title-header">{product.name}</h3>
//                 <span className="item__title-price">{product.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="row">
//           <div className="items__show">
//             {/* Đây là nút để tải thêm sản phẩm */}
//             <button>VIEW MORE OTHER PRODUCTS</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Product() {
//   fetch('/api/products')
//     .then(response => response.json()) // Chuyển đổi dữ liệu nhận được thành JSON
//     .then(products => console.log(products)) // Log dữ liệu sản phẩm ra console
// }


// export default Product;
