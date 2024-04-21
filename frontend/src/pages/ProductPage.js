import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';

function Product() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(15); // Số lượng sản phẩm hiển thị ban đầu
  const [isAllProductsLoaded, setIsAllProductsLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      const productList = response.data;
      // console.log(productList);
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const loadMoreProducts = () => {
    if (visibleProducts < products.length) {
      // Tăng số lượng sản phẩm hiển thị lên 10
      setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 10);
    } else {
      // Hiển thị thông báo khi đã hết sản phẩm
      setIsAllProductsLoaded(true);
    }
  };

  return (
    <main>
      <Banner />
      <section className="items">
        <div className="container">
          <div className="heading-title">
            <h2>NEW ITEMS</h2>
            <p>The internationally trending products, the fashionable ladies should not miss out.</p>
          </div>
          <div className="row">
            {products.slice(0, visibleProducts).map((product, index) => (
              <div key={index} className="col l-3 m-6 s-12">
                <img src={product.src} alt={product.name} className="items__img" />
                <div className="item__title">
                  <h3 className="item__title-header">{product.name}</h3>
                  <span className="item__title-price">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="items__show">
              {!isAllProductsLoaded ? (
                <button onClick={loadMoreProducts}>VIEW MORE OTHER PRODUCTS</button>
              ) : (
                <button>NO PRODUCTS AVAILABLE!</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;

//Dưới đây là một số cải tiến nhỏ để xử lý trường hợp khi không có sản phẩm được tải:
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Banner from '../components/Banner';

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(15); // Số lượng sản phẩm hiển thị ban đầu
//   const [isAllProductsLoaded, setIsAllProductsLoaded] = useState(false);
//   const [loading, setLoading] = useState(true); // Trạng thái loading

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/products');
//       const productList = response.data;
//       console.log(productList);
//       setProducts(productList);
//       setLoading(false); // Dữ liệu đã được tải, không còn trong trạng thái loading
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const loadMoreProducts = () => {
//     if (visibleProducts < products.length) {
//       // Tăng số lượng sản phẩm hiển thị lên 10
//       setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 10);
//     } else {
//       // Hiển thị thông báo khi đã hết sản phẩm
//       setIsAllProductsLoaded(true);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Nếu đang trong quá trình tải dữ liệu, hiển thị thông báo loading
//   }

//   return (
//     <main>
//       <Banner />
//       <section className="items">
//         <div className="container">
//           <div className="heading-title">
//             <h2>NEW ITEMS</h2>
//             <p>The internationally trending products, the fashionable ladies should not miss out.</p>
//           </div>
//           <div className="row">
//             {products.slice(0, visibleProducts).map((product, index) => (
//               <div key={index} className="col l-3 m-6 s-12">
//                 <img src={product.src} alt={product.name} className="items__img" />
//                 <div className="item__title">
//                   <h3 className="item__title-header">{product.name}</h3>
//                   <span className="item__title-price">{product.price}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="row">
//             <div className="items__show">
//               {!isAllProductsLoaded ? (
//                 <button onClick={loadMoreProducts}>VIEW MORE OTHER PRODUCTS</button>
//               ) : (
//                 <button>NO PRODUCTS AVAILABLE!</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Product;



//Đây là phiên bản lỗi localstorage
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Banner from '../components/Banner';

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(15); // Số lượng sản phẩm hiển thị ban đầu
//   const [isAllProductsLoaded, setIsAllProductsLoaded] = useState(false);

//   useEffect(() => {
//     const storedProducts = localStorage.getItem('products');
//     if (storedProducts) {
//       setProducts(JSON.parse(storedProducts));
//     } else {
//       fetchProducts();
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('products', JSON.stringify(products));
//   }, [products]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/products');
//       const productList = response.data;
//       console.log(response.data);
//       setProducts(productList);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const loadMoreProducts = () => {
//     if (visibleProducts < products.length) {
//       // Tăng số lượng sản phẩm hiển thị lên 10
//       setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 10);
//     } else {
//       // Hiển thị thông báo khi đã hết sản phẩm
//       setIsAllProductsLoaded(true);
//     }
//   };

//   return (
//     <main>
//     <Banner />
//     <section className="items">
//       <div className="container">
//         <div className="heading-title">
//           <h2>NEW ITEMS</h2>
//           <p>The internationally trending products, the fashionable ladies should not miss out.</p>
//         </div>
//         <div className="row">
//           {products.slice(0, visibleProducts).map((product, index) => (
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
//             {!isAllProductsLoaded ? (
//               <button onClick={loadMoreProducts}>VIEW MORE OTHER PRODUCTS</button>
//             ) : (
//               <button>NO PRODUCTS AVAILABLE!</button>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//     </main>
//   );
// }

// export default Product;

