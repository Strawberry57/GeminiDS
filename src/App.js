import "./App.css";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";
import Sidebar from "./component/sidebar/sidebar";
// import Hello from "./component/hello";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Sidebar />
          <Content />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
