import ButtonAppBar from "./Navbar"
import { useEffect, useState } from "react";
import Habits from "./Habits";
import BasicModal from "../utils/BasicModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./Tracker";
import { useDispatch } from "react-redux";
import { getHabits } from "../actions/habits";

function App() {
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHabits())
  }, [])
  
  return (
    <>
      <BrowserRouter>
      <ButtonAppBar showModal={showModal} setshowModal={setshowModal}/>
        <Routes>
          <Route index element={<Habits/>} />
          <Route path="/habits-tracker" element={<Tracker />} />
        </Routes>
      </BrowserRouter>
      <BasicModal showModal={showModal} setshowModal={setshowModal}/>
    </>
  );
}

export default App;
