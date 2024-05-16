import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import FormContent from "./Components/FormContent/FormContent";
import Buttons from "./Components/Buttons/Buttons";
console.log(Navbar);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ContactUs />
      <FormContent />
    </>
  );
}

export default App;
