function Modal(props) {
  function canclehandler() {
    props.oncancle()
  }
  function confirmhandler() {
    props.onconfirm()
  }
  return (
    <div className="modal">
      <button className="btn btn--alt btn2" onClick={canclehandler}>Cancel</button>
      <button className="btn" onClick={confirmhandler}>Confirm</button>
    </div>
  );
}

export default Modal;
