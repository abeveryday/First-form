import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Search from "./Search";

export default function Index() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
    </div>
  );
}
