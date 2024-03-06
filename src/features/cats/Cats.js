import React from "react";
import CatList from "./CatList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";

function Cats() {

  const catPics = useSelector((state) => state.entities)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCats())
  }, [])

  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;