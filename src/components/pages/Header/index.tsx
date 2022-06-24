import Bag from "../../Bag";
import Menu from "../../Menu";

import './styles.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className="shop-logo">
        SHOP
      </div>
      <div className="right">
        <div className="options">
          <p>MY ACCOUNT</p>
          <p>SEARCH</p>
        </div>
        <div className="bag">
          <Bag />
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </header>
  )
}