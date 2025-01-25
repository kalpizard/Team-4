const Modal = ({ children, Open, Close }) => {
  if (!Open) {
    return null;
  } else {
    return (
      <>
        <div
          className='fixed inset-0 z-10 overflow-hidden bg-black opacity-60'
          onClick={Close}
        ></div>
        <div className='fixed inset-0 z-20 overflow-hidden'>
          {children}
          <button onClick={Close}>Cerrar</button>
        </div>
      </>
    );
  }
};

export default Modal;
