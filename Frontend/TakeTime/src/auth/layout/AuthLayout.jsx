// AuthLayout.jsx
export const AuthLayout = ({ children }) => {
    return (
      <div className='w-full h-full bg-slate-100 flex items-center justify-center'>
        <div className='w-full h-full p-6 bg-white rounded-lg shadow-md max-w-lg'>
          {children}
        </div>
      </div>
    );
  };
  