import React from 'react';
import { Link } from "react-router-dom";
import imgpropia from "../../logo/logo.png";
import { useSelector } from 'react-redux';

function Title() {

  const user = useSelector(state => state.userLogin);

  return (
    <div className="row justtify-content-center align-items-center">
        <figure className='col-6 col-sm-5 col-md-4 col-lg-3'>
          <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50 p-0' />
        </figure>
        {user.email 
          ? <Link to="/myaccount" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
              🙋‍♂️ {user.firstname}
            </Link>
          : <Link to="/login" className="col-2 col-sm-1 offset-sm-4 col-md-1 offset-md-5 col-lg-1 offset-lg-6">
              🙋‍♂️ Login
            </Link>
        }
        <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🧡 Fav</Link>
        <Link to='/' className="col-2 col-sm-1 col-md-1 col-lg-1">🛒 Cart</Link>
    </div>
  );
};

export default Title;