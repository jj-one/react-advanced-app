import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProductPage() {
  const { id } = useParams();
  const history = useHistory();

  if(id && parseInt(id) === 2) {
    return <Redirect to="/" />;
  }

  const goToAboutPage = () => {
    history.push("/about");
  }

  return (
    <div>
      <h1>Product Page</h1>
      {id ? <div>
          Product ID: {id} {" "}
          {parseInt(id) === 3 ? <button onClick={goToAboutPage}>Go to About</button> : null}
        </div>
        : <ul>
          <li key={1}><Link to="/product/1">Product 1</Link></li>
          <li key={2}><Link to="/product/2">Product 2</Link></li>
          <li key={3}><Link to="/product/3">Product 3</Link></li>
        </ul>
      }
      
    </div>
  )
}
