import Picture from './Picture';
import TodoListApp from './TodoListApp/TodoListApp';
import Blogs from './BlogDemo/Blogs';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <h1>Picture</h1>
      <Picture
        imgUrl='https://media3.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif?cid=ecf05e475ax87l55vw2631gf3q1hk7l9cipqwddek6sxkxnd&rid=giphy.gif&ct=g'
        altTag='Cat walking in slow motion'
      /> */}
      <TodoListApp />
      <hr />
      <Blogs />
    </div>
  );
}

export default App;
