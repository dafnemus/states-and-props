import Title from "./components/Title";
import "./App.css";
import Gather from "./components/Input";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    return setValue(e.target.value);
  };

  const addNumber = () => {
    setNumbers([...numbers, value]);
    setValue("");
  };
  console.log(numbers);
  return (
    <>
      <Title text="Agregar números" />
      <Gather
        value={value}
        onChange={handleChange}
        onClick={addNumber}
        list={numbers}
      />
    </>
  );
}

export default App;
