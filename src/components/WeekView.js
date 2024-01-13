import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // use selector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  // getting habit from habits state based on local storage id and setting it on habit
  let habit = {}
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <>
      <Navbar name="Week View" />
      <div className="weekly-view">
      <Link to="/"><i class="fa-solid fa-backward"></i></Link>
        <h1 className="habit-title">{habit.name}</h1>
        <div className="days">
          {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
        </div>
      </div>  

    </>
  );
};

export default WeekView;
