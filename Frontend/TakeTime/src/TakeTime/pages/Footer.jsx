
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-semibold">My Website</h5>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>


        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>


        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2.1 1.2-3.2 3-3.2.9 0 1.8.1 2 .1v2.3h-1.2c-1 0-1.3.6-1.3 1.2V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22 5.9c-.8.4-1.7.7-2.6.8a4.6 4.6 0 0 0 2-2.5 9.2 9.2 0 0 1-2.9 1.1 4.6 4.6 0 0 0-7.9 4.2 13.1 13.1 0 0 1-9.5-4.8 4.6 4.6 0 0 0 1.4 6.2c-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4.1 3.7 4.5-.7.2-1.4.3-2.2.3-.5 0-1-.1-1.5-.2a4.6 4.6 0 0 0 4.3 3.2A9.3 9.3 0 0 1 2 19.5c-.3 0-.6 0-.9-.1A13.2 13.2 0 0 0 7.1 21c8.5 0 13.2-7 13.2-13.2v-.6c.9-.6 1.6-1.4 2.2-2.3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 2.2a7.8 7.8 0 0 1 7.8 7.8v4a7.8 7.8 0 0 1-7.8 7.8h-4a7.8 7.8 0 0 1-7.8-7.8v-4a7.8 7.8 0 0 1 7.8-7.8h4m0-1.5h-4A9.3 9.3 0 0 0 2.5 10v4a9.3 9.3 0 0 0 9.3 9.3h4a9.3 9.3 0 0 0 9.3-9.3v-4a9.3 9.3 0 0 0-9.3-9.3zm0 4.2a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm6.4.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}
