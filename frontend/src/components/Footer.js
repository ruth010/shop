import React from 'react';

function Footer() {
  return (
    <footer>
      <hr className="end-sec" />
      <section className="infor">
        <div className="container">
          <div className="row">
            <div className="col l-3 m-6 s-12">
              <div className="infor__detail">
                <h3>Shop</h3>
                <ul>
                  <li><a href="#">Introduction</a></li>
                  <li><a href="#">Store List</a></li>
                  <li><a href="#">Recruitment</a></li>
                </ul>
              </div>
            </div>
            <div className="col l-3 m-6 s-12">
              <div className="infor__detail">
                <h3>Shopping</h3>
                <ul>
                  <li><a href="#">Promotions</a></li>
                  <li><a href="#">New Products</a></li>
                  <li><a href="#">Shopping Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="col l-3 m-6 s-12">
              <div className="infor__detail">
                <h3>Support</h3>
                <ul>
                  <li><a href="#">Customer Policy</a></li>
                  <li><a href="#">Shipping Policy</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col l-3 m-6 s-12">
              <div className="infor__detail">
                <h3>Connect with Us</h3>
                <ul>
                  <li><a href="#">Lorem, ipsum dolor.</a></li>
                  <li><a href="#">Lorem, ipsum dolor.</a></li>
                  <li><a href="#">Lorem, ipsum dolor.</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="end-sec" />

      <section className="bottom-bar">
        <div className="container">
          <div className="bottom-bar__content">
            <div>© ABCDEF Group Joint Stock Company</div>
            <div>Powered by GH Enterprise.</div>
          </div>
        </div>
      </section>

      <hr className="end-sec" />
    </footer>
  );
}

export default Footer;
