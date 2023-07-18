import "./App.css";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        if (item.image) {
          return <Card image={item.image} desc={item.desc} />;
        } else {
          return <Card desc={item.desc} image="" />;
        }
      })}
    </div>
  );
}

export default App;
