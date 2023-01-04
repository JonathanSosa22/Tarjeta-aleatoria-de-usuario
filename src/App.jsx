import "./App.css";
import users from "./components/users.json";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card userData={users} />
    </div>
  );
}

export default App;
