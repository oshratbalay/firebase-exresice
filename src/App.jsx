import React, { useEffect, useState } from "react";
import firebase from "./fireBaseApp";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function App() {

  // useState varibales //
  const [car, setcar] = useState();
  const [model, setmodel] = useState();
  const [year, setyear] = useState();
  const [color, setcolor] = useState();
  const [ID, setID] = useState();

  // dispatch function //
let dispatch = useDispatch();
  

// function that show all data //
  const getcar = async () => {
    let response = await firebase.firestore().collection("Car").get();
    let pers = [];
    response.forEach((doc) => {
      let obj = {
        id: doc.id,
        model: doc.data().model,

        year: doc.data().year,
        color: doc.data().color,
      };
      pers.push(obj);
      console.log(pers);
      let action = { type: "ADD", payload: pers };
      dispatch(action);
    });

    setcar(pers);
  };

// add function - adding to the firebase//
  const addcar = async () => {
    const obj = { model: model, year: year, color: color };

  let action = { type: "ADD", payload: obj };
  dispatch(action);
    try {
      const status = await firebase.firestore().collection("Car").add(obj);

      console.log(car);
    } catch (e) {
      console.log(e);
    }
    window.location.reload()
  };

// useEffect Hook //
  useEffect(() => {
    getcar();
    
  },[]);


  // delete doc from the firebase
  let deletecar = async (ID) => {
    const status = await firebase
      .firestore()
      .collection("Car")
      .doc(ID)
      .delete();
      window.location.reload()

  };

  return (
    <div>
      <h3>add to the data</h3>
      model:{" "}
      <input
        onChange={(e) => {
          setmodel(e.target.value);
        }}
        type="text"
      />
      <br />
      year:{" "}
      <input
        onChange={(e) => {
          setyear(e.target.value);
        }}
        type="text" jhbkggjgjgjhgjhb
      />
      <br />
      color:{" "}
      <input
        onChange={(e) => {
          setcolor(e.target.value);
        }}
        type="text"
      />
      <br />
      <button onClick={addcar}> add</button>
      <br />
      <br />
      {car?.map((car1, i) => (
        <div key={i}>
          <span> model : {car1.model} </span>
          <span> color : {car1.color} </span>
          <span> year : {car1.year} </span>

          <button onClick={() => deletecar(car1.id)}> delete</button>
        </div>
      ))}
    </div>
  );
}
