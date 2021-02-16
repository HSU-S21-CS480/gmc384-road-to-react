import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, FormControl, Form, Button, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react';



const list1 = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]
const welcome = {
  greeting: 'Hello',
  title: 'React',
}

const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(function (number) {
  return number * 2;
});




const App = () => {
 


  const handleChange = event => {
    console.log(event.target.value);
  };

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 1,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  const SearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => {
    story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  



  const title = 'React';
  let some_var = 414;
  console.log(some_var);
  const [count, setCount] = useState(0);

  return (
    <Container>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row>
        <Col>
          <h1>
            My Hacker stories
          </h1>

          <Search search={searchTerm} onSearch={SearchChange} />
        </Col>
      </Row>
      



      <hr />
     
      <List list={list1} />

      <br />

      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>


    </Container>

  );
};



const Search = (props) => (
    <Container>
      <Row>
        <Col>
          <label htmlFor="search">Search:   </label><span> </span>
          <input id="search" type="text" value={props.search} onChange={props.onSearch} />
        </Col>
      </Row>
      <Row>
        <Col>
          Searching for <strong>{props.search}</strong>
        </Col>
      </Row>
    </Container>
);



const List =({ list }) =>
  list.map(({objectID, title, url, author, num_comments, points}) => <Item key= {objectID} title={title}
    url={url}
    author={author}
    num_comments={num_comments}
    points={points}/>
);

   
const Item = ({ title, url, author, num_comments, points }) => (
  <Container>
    <Row>
      <Col>
        <span>
          <a href = {url}>{title}</a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>

      </Col>
    </Row>
  </Container>
);





export default App;
