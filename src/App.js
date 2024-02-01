import './App.css';
// import EditTask from './components/EditTask/EditTask';
// import Navbar from './components/Navbar/Navbar';
// import NewTask from './components/NewTask/NewTask';
// import Profile from './components/Profile/Profile';
// import ShowList from './components/ShowList/ShowList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <TodoList></TodoList>
        {/* <Navbar></Navbar>
        <NewTask></NewTask>
        <EditTask></EditTask>
        <ShowList></ShowList>
        <Profile></Profile> */}
      </div>
    </div>
  );
}

export default App;
