import "./App.css";
import Def, { Heading } from "./components/Heading";

function App() {
  var num1 = 100;
  var fun1 = () => "Manavi";
  return (
    <>
      <Def />
      <Heading />
      My name is {fun1()} and number is {num1}
    </>
  );
}

export default App;
