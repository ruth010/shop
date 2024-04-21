import React from 'react';

function Header() {
  return (
    <header>
      <section className="top-bar">
        <div className="full-container">
          <div className="fluid-container">
            <div className="row">
              <div className="col l-0 m-4 s-4">
                <div className="top-bar__toggle">
                  <label htmlFor="">
                    <svg className="top-bar__toggle-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="col l-2 m-4 s-4">
                <a href="/">
                  <div className="top-bar__logo">F-SHOP</div>
                </a>
              </div>
              <div className="col l-8 m-0 s-0">
                <ul className="top-bar__menu">
                  <li><a href="/">HOME</a></li>
                  <li>
                  </li>
                  <li><a href="/ProductPage">PRODUCT</a></li>

                  <li><a href="/UserPage">USER</a></li>
                </ul>
              </div>
              <div className="col l-2 m-4 s-4">
                <ul className="top-bar__links">
                  <li><a href="/UserPage"><svg width="20" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99952 8C4.79727 8 2.98828 6.19608 2.98828 4C2.98828 1.80392 4.79727 0 6.99952 0C9.20176 0 11.0108 1.80392 11.0108 4C11.0108 6.19608 9.20176 8 6.99952 8ZM6.99952 1.01961C5.34783 1.01961 4.01075 2.35294 4.01075 4C4.01075 5.64706 5.34783 6.98039 6.99952 6.98039C8.6512 6.98039 9.98828 5.64706 9.98828 4C9.98828 2.35294 8.6512 1.01961 6.99952 1.01961Z" fill="#2D2D2D"/>
                    <path d="M13.5281 15.9998H0.47191C0.157303 15.9998 0 15.7645 0 15.5292V12.0782C0 11.5292 0.235955 11.0586 0.707865 10.8233C4.48315 8.47036 9.59551 8.47036 13.3708 10.8233C13.764 11.0586 14.0787 11.6076 14.0787 12.0782V15.5292C14 15.7645 13.764 15.9998 13.5281 15.9998ZM1.02247 14.9802H13.0562V12.0782C13.0562 11.9213 12.9775 11.7645 12.8202 11.686C9.35955 9.5684 4.7191 9.5684 1.25843 11.686C1.10112 11.7645 1.02247 11.9213 1.02247 12.0782V14.9802Z" fill="#2D2D2D"/>
                  </svg></a></li>
                  {/* <li><a href="#"><svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3457 5.49982C11.3457 8.26112 9.10717 10.4996 6.34572 10.4996C3.58427 10.4996 1.3457 8.26112 1.3457 5.49982C1.3457 2.73851 3.58427 0.5 6.34572 0.5C9.10717 0.5 11.3457 2.73851 11.3457 5.49982Z" stroke="#2D2D2D"/>
                    <line y1="-0.5" x2="4.94967" y2="-0.5" transform="matrix(0.70712 0.707094 -0.70712 0.707094 9.3457 9.50012)" stroke="#2D2D2D" strokeLinejoin="round"/>
                  </svg></a></li> */}
                  {/* <li className="m-0"><a href="#"><svg width="20" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 16H0V5H15V16ZM0.789474 15.1665H14.1228V5.84209H0.789474V15.1665Z" fill="#2D2D2D"/>
                    <path d="M11.1586 7.25279H10.4849V3.78071C10.4849 2.08325 9.13752 0.694416 7.49074 0.694416C5.84395 0.694416 4.49658 2.08325 4.49658 3.78071V7.17563H3.74805V3.78071C3.74805 1.69746 5.39483 0 7.49074 0C9.58664 0 11.2334 1.69746 11.2334 3.78071V7.25279H11.1586Z" fill="#2D2D2D"/>
                    <path d="M5.09591 6.48145H3V7.25302H5.09591V6.48145Z" fill="#2D2D2D"/>
                    <path d="M11.8322 6.48145H9.73633V7.25302H11.8322V6.48145Z" fill="#2D2D2D"/>
                  </svg></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
