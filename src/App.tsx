import './App.css';
import { Header } from './components/pages/Header';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="left">
          <p>WOMEN</p>
          <p>MEN</p>
          <p>SHOES</p>
          <p>BRAND</p>
        </div>
        <div className="center">
          <div className="product-area">
            <h1>BRAND SWEATHERSHIRT</h1>
            <strong>$1000</strong>
            <div className="box-area">
              <i className="fa-solid fa-arrow-left"></i>
              <span>PREV</span>
            </div>
          </div>
          <div className="button-area">
            <div className="button-area-box">
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-area-wrapper">
            <div className="box-area">
              <span>NEXT</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="size-area">
              <span className='rounded'>S</span>
              <span className='rounded'>M</span>
              <span className='rounded'>L</span>
            </div>
            <div className="amount-area">
              1
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
