import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="#">E-Cart</a>
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {
              data.products.map(product => (
                <div key={product._id} className="card">
                  <a href={'/product/${product._id}'}>

                    <img className="medium" src={product.image} alt={product.type} />
                  </a>
                  <div className="card-body">
                  <a href={'/product/${product._id}'}>
                      <h2>{product.type}</h2>
                    </a>
                    <div className="rating">
                      <span> <i className="fa fa-star"></i> </span>
                      <span> <i className="fa fa-star"></i> </span>
                      <span> <i className="fa fa-star"></i> </span>
                      <span> <i className="fa fa-star"></i> </span>
                      <span> <i className="fa fa-star"></i> </span>
                    </div>
                    <div className="price">{product.price}tk</div>
                  </div>
                </div>
              ))
            }


          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
