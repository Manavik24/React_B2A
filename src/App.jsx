import "./App.css";
import { Heading } from "./components/Heading";

function App() {
  let flag = 0;
  let arr1 = ["Eggs", "Fruits", "Bread"];
  return (
    <>
      {!flag && <div>Hello</div>}
      {flag ? "True" : "False"}
      <Heading foodItems={arr1} />
    </>
  );
}

export default App;
