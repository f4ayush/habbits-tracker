import ButtonAppBar from "./Navbar"
import { useState } from "react";
import { Context } from "../Context.js";
import Habbits from "./Habbits";
import BasicModal from "../utils/BasicModal";
function App() {
  const [showModal, setshowModal] = useState(false);
  const [habbits, setHabbits] = useState([]);
  return (
    <Context.Provider value={[habbits, setHabbits]}>
      <ButtonAppBar showModal={showModal} setshowModal={setshowModal}/>
      <Habbits/>
      <BasicModal showModal={showModal} setshowModal={setshowModal}/>
    </Context.Provider>
  );
}

export default App;
