import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import {
  horror,
  comedy,
  romance,
  action,
  documentries,
} from "./urls";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Action" url={action} />
      <RowPost title="Romance" isSmall url={romance} />
      <RowPost title="Comedy" isSmall url={comedy} />
      <RowPost title="Horror" isSmall url={horror} />
      <RowPost title="Documentries" isSmall url={documentries} />
    </div>
  );
}

export default App;
