import Navbar from "./Navbar"
import Books from "./Books";
import "./index.css";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="banner"></div>
        <div className="content">
          <Books />
        </div>
      </div>
    </>
  )
}

export default App;
