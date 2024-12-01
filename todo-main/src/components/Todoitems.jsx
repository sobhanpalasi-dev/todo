import React from "react";
import { TiTick } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";


const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            
              {isComplete ? (<TiTick className='bg-orange-600 text-white border border-black w-5 h-5 rounded-full'/>) : (<TiTick className={'bg-white-600 text-white border border-black w-5 h-5 rounded-full'}/>)}
        
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <RiDeleteBinLine onClick={()=>{deleteTodo(id)}} className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default Todoitems