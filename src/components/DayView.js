import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DayView = ({day}) => {
  
  const today=new Date();
  const todayDay=today.getDay();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  const date=new Date(day.yyyy,day.mm,day.dd);

 //on marking as done
  const markToDone=()=>{
    if(day.id>todayDay){
      toast.error(" Next days status id freezed");
      return;
    }
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  }
 
  //on marking not done
  const markToUnDone=()=>{
    if(day.id>todayDay){
      toast.error("You cannot change your next days status");
      return;
    }
    // call habit undone action from reducer
    dispatch(habitUnDone(day.id))
  }
 //on marking none
  const markToNone=()=>{
    if(day.id>todayDay){
      toast.error("You cannot change your next days status");
      
      return;
    }
    // call habit none action from reducer
    dispatch(habitNone(day.id));
  }
 
  return (
    <div className="day-box">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <div className="daily-actions">
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    
      </div>
      </div>
  );
};

export default DayView;
