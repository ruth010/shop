import React, { useState } from 'react';
import UserManagement from '../components/Admin/UserManagement'; 
import ProductManagement from '../components/Admin/ProductManagement'; 

function Admin() {
  const [selectedOption, setSelectedOption] = useState('user'); // Lựa chọn mặc định

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="full-container">
      <div className="fluid-container">
        <div className="row">
          <div className="col l-3 m-6 s-12">
            <div className="options">
              <h2>Options</h2>
              <button onClick={() => handleOptionChange('user')}>User Management</button>
              <button onClick={() => handleOptionChange('product')}>Product Management</button>
            </div>
          </div>
          <div className="col l-9 m-6 s-12">
            {selectedOption === 'user' ? <UserManagement /> : <ProductManagement />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

// import React, { useState } from 'react';
// import ProductManagement from '../components/Admin/ProductManagement'; 

// function Admin() {
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleOptionChange = (option) => {
//         setSelectedOption(option);
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col l-3 m-12 s-12">
//                     <div className="options">
//                         <h2>Options</h2>
//                         <button onClick={() => handleOptionChange('user')}>User Management</button>
//                         <button onClick={() => handleOptionChange('product')}>Product Management</button>
//                     </div>
//                 </div>
//                 <div className="col l-9 m-12 s-12">
//                     {/* Phần cột bên phải */}
//                     {selectedOption === 'product' && <ProductManagement />} {/* Render ProductManagement nếu selectedOption là 'product' */}
//                     {/* Các điều kiện render cho các option khác */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Admin;
