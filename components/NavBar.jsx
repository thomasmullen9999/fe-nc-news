import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <ButtonGroup>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/articles"><Button>Articles</Button></Link>  
          <Link to="/users"><Button>Users</Button></Link>    
          <Link to="/topics"><Button>Topics</Button></Link>    
      </ButtonGroup>
    </nav>
  );
};

export default NavBar;