import "./App.css";

function App() {
  let num1 = 100;
  let fun1 = () => "Manavi";
  let foodArray = ["Dal", "Roti", "Rice"];
  return (
    <>
      <p>
        I am {fun1()} and my number is {num1}
      </p>
      <ol>
        {foodArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
