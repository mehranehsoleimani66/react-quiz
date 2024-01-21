import Content from "./Content";
import Header from "./Header";
import "./App.css";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err, "error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <Content>
        <p>1/20</p>
        <p>questions</p>
      </Content>
    </div>
  );
};

export default App;
