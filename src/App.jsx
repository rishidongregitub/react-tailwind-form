import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa"

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-600">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full">
        <h3 className="flex items-center justify-center text-gray-700
                                      text-md font-bold mb-2">Singh Up</h3>
        <div className="mb-4">
          <label className="block text-gray-700
                                      text-sm font-bold mb-2"
            htmlFor="username">
            Name
          </label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUserAlt className="text-gray-500 mr-3" />
            <input
              className="appearance-non
                          bg-transparent 
                          border-none w-full 
                          text-gray-700 mr-3 
                          py-1 px-2 leading-tight
                          focus:outline-none"
                          id="username" type="text"
                          placeholder="Your name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700
                                      text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <div className="flex items-center
                                    border-b border-gray-300
                                    py-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              className="appearance-none
                                       bg-transparent border-none
                                       w-full text-gray-700 mr-3 
                                       py-1 px-2 leading-tight 
                                       focus:outline-none"
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700
                                      text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <div className="flex items-center
                                    border-b border-gray-300
                                    py-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              className="appearance-none
                                       bg-transparent
                                       border-none w-full 
                                       text-gray-700 mr-3 
                                       py-1 px-2 leading-tight
                                       focus:outline-none"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>

        <div className="flex items-center 
                                justify-between">
          <button
            className="bg-green-500 
                                   hover:bg-blue-700 
                                   text-white font-bold
                                   py-2 px-4 rounded 
                                   focus:outline-none 
                                   focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}
export default App
