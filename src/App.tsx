// import './App.css'
import './index.css'

function App() {

  return (
    <>
      <header className="fixed w-full flex flex-end items-center test pt-5 pr-1 pb-5 pl-1">
        <nav>
          <ul className="list-none">
            <li className="inline-block pt-0 pr-1 pb-0 pl-1"><a className="text-decoration-none text-white" href="#">Main</a></li>
            <li className="inline-block pt-0 pr-1 pb-0 pl-1"><a className="text-decoration-none text-white" href="#">Blog</a></li>
          </ul>
        </nav>
      </header>
      <div className="fixed inset-0 w-full h-screen flex items-center justify-center background ">
        <p className="text-max">輝</p>
      </div>
      <div className="h-screen text-center flex flex-col flex-center">
        <h1 className="">Hi, I'm Burg!</h1>
        <p>A lonewalker.</p>
      </div>
    </>
  )
}

export default App
