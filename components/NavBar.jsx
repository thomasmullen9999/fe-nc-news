import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ButtonGroup>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/articles"><Button>Articles</Button></Link>                  
      </ButtonGroup>
    </nav>
  );
};

export default NavBar;