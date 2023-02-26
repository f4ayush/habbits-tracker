import ButtonAppBar from "./Navbar"
import { useEffect, useState } from "react";
import Habbits from "./Habbits";
import BasicModal from "../utils/BasicModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./Tracker";
import { useDispatch } from "react-redux";
import { getHabbits } from "../actions/habbits";

function App() {
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHabbits())
  }, [])
  
  return (
    <>
      <BrowserRouter>
      <ButtonAppBar showModal={showModal} setshowModal={setshowModal}/>
        <Routes>
          <Route index element={<Habbits/>} />
          <Route path="/habbits-tracker" element={<Tracker />} />
        </Routes>
      </BrowserRouter>
      <BasicModal showModal={showModal} setshowModal={setshowModal}/>
    </>
  );
}

export default App;
