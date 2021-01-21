import logo from './logo.svg';
import './App.css';

const list = [
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

const numbers = [1,4,9,16];
const newNumbers = numbers.map(function(number){
  return number * 2;
});


function App() {

  const title = 'React';
  let some_var = 414;
  
  return (
   <div className = "App">
     <h1>
       {welcome.greeting}{welcome.title}
     </h1>

     <label htmlFor="search">Search: </label>
     <input id = "search" type = "text"/>
      <hr />
    {list.map( (item) => {
      return <div key = {item.title}>
        <span>
          <a href = {item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>
        <span> {item.num_comments}</span>
        <span> {item.points}</span>
      </div>
    })}
 
   </div>
   
  );
}

function List() {
  return list.map(function(item){
    return (
      <div key = {item.objectID}>
        <span>
          <a href = {item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>
        <span> {item.num_comments}</span>
        <span> {item.points}</span>
      </div>
    );
  });
}

export default App;
