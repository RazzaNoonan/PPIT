import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Read } from './components/read';
import { Create } from './components/create';

import { Login } from './components/login';
import { SignUp } from './components/signup';

import { isAuthenticated } from './auth';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';

import { Edit } from './components/edit';

class App extends React.Component {

  state = {
    isAuthenticated: false
  };

  render() {
    return (
      <Router>
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Inventory</Nav.Link>
            <Nav.Link href="/create">Add</Nav.Link>
          	</Nav>
          <Nav className="justify-content-center">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        {/* using BrowserRouter to switch between components  */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>

          {/* Redirect to the Login component if not authenticated
          <Route path="/">
            {isAuthenticated ? <Content /> : <Redirect to="/login" />}
          </Route> */}

        </Routes>
        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div>
      </Router>
    );
  }
}

export default App;