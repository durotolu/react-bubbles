import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import withAuth from "../axios/axios";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  withAuth().get('http://localhost:5000/api/colors')
  .then(res => {
    console.log(res)
    debugger
    setColorList(res.data)
  })
  .catch(err => {
    console.log(err)
    debugger
  })

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
