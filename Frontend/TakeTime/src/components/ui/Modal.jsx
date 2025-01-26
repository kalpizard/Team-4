const Modal = ({ children, Open, Close }) => {
  if (!Open) {
    return null;
  } else {
    return (
      <>
        <div
          className="fixed inset-0 z-10  bg-opacity-40"
          onClick={Close}
        ></div>
        <div className="fixed inset-0 z-20 flex  backdrop-blur-md items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-lg max-w-lg w-full p-6">
            {children}
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={Close}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
