import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">
        <button>
          show PageTwo when you click this!!
        </button>
      </Link>
    </div>
  );  
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">
        <button>
          show PageOne when you click this!!
        </button>
      </Link>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo"  component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Page;