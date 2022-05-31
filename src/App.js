import { useState } from "react";
//importing styles
import "./app.css";

//importing components
import { Header } from "./components/header";
import { Content } from "./components/content";

export default function App() {
  const [fan, setFan] = useState("");

  const handleChooseFan = ({ name }) => {
    setFan(name);
  };

  return (
    <>
      <Header fan={fan} />
      <hr />
      <Content handleChooseFan={handleChooseFan} />
    </>
  );
}
