import { useState } from "react";
import Title from "./components/Title";
import Gather from "./components/Gather";
import "./App.css";

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
