import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function TodoCard(props) {
  const [ismodalopen, setismodalopen] = useState(false);
  function deletehandler() {
    setismodalopen(true);
  }

  function closemodalhandler() {
    setismodalopen(false);
  }
  return (
    <div className="card">
      <h1> {props.title} </h1>
      <h3 className="undone"> {props.done} </h3>
      <div className="actions">
        <button className="btn" onClick={deletehandler}>
          Read more
        </button>
      </div>
      {ismodalopen && (
        <Modal oncancle={closemodalhandler} onconfirm={closemodalhandler} />
      )}
      {ismodalopen && <Backdrop onClose={closemodalhandler} />}
    </div>
  );
}

export default TodoCard;
