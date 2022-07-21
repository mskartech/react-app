import TodoCard from "./components/TodoCard";
// import Modal from "./components/Modal";
// import Backdrop from "./components/Backdrop";
function App(props) {
  return (
    <div>
      <h1 className="titr">My todos</h1>
      <TodoCard title="Clean the room" done="undone"/>
      {/* <Modal title2="Clean the room" paragraph="Clean the room at 9:00"/> */}
      <TodoCard title="walking in the park" done="undone" />
      <TodoCard title="Programming" done="undone" />
      <TodoCard title="Reading book" done="undone" />
      <TodoCard title="Sleeping" done="undone" />
      {/* <Backdrop/> */}
    </div>
  );
}

export default App;
