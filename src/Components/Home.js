import './css/home.css'
import React,{useState,useCallback} from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [value,setvalue]=useState("");
    const navigate=useNavigate()

    const handeljoinRomm=useCallback(()=>{
        navigate(`/roomPage/${value}`)
    },[navigate,value])

    return (
        <>
            <div className='brandDiv'></div>
            <h2 className='name'>WELCOME TO VIRTUAL CLASS</h2>
            <div className='homeBody'>
              
                <div>
                    <input className='inputID' type="text" placeholder='Enter Class Code' value={value} onChange={e=>setvalue(e.target.value)}/>
                    <button className='button' onClick={handeljoinRomm}>Join</button>
                </div>
            </div>
        </>
    )
}
