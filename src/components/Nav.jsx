import { Link, useLocation } from "react-router-dom"

const Nav = () => {

  const location = useLocation();

  return (
    <>
      <div className="flex justify-between shadow-xl rounded-2xl font-mono text-xl">
        <div className="ml-2">
        </div>
        <div className="flex justify-start gap-4 mr-2">
          <div className={`${location.pathname == '/quote' ? ' block text-center my-5 rounded-2xl px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl bg-sky-200' : 'block text-center my-5 text-gray-500 px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl '}`}>            
            <Link 
              className=""
              to="/quote">Quote
            </Link>
          </div>
          <div className={`${location.pathname == '/' ? ' block text-center my-5 rounded-2xl px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl bg-sky-200' : 'block text-center my-5 text-gray-500 px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl '}`}>
            <Link 
              className=""
              to="/">Main Page
            </Link>
          </div>
          <div className={`${location.pathname == '/books' ? ' block text-center my-5 rounded-2xl px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl bg-sky-200' : 'block text-center my-5 text-gray-500 px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl '}`}>
            <Link 
              className=""
              to="/books">Books
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
