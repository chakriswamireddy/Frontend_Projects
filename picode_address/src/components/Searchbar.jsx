import React, { useEffect, useState } from 'react'
import address from '../Images/address.png'





function Searchbar({searchedZip,HandleZipSubmit}) {
    const [userInput,setUserInput] = useState("")
    const [showWarningMsg,setShowWarning] = useState(false)

    useEffect(()=> {
        const inputCheck=() => {
            if  ( 99999<userInput && userInput<1000000) {
                setShowWarning(false)
            }
            else {
                setShowWarning(true)
            }
            
        }
        inputCheck();

    },[userInput])



    const handleUserInput =() => {
        HandleZipSubmit(userInput)
    }
  return (
    <div>
        <div id='input-box'>

            <img src={address} alt=""  />
            <input type="number" onChange={(e)=>setUserInput(e.target.value)}   />
            <span>Enter Zip Code</span>
            {showWarningMsg && userInput && (
                <p> *enter proper zip code</p>
            )}
    


        </div>
        <div id='btn-area'>
            <button className={`${showWarningMsg && userInput ?'disabled-btn':""}`} onClick={handleUserInput} disabled={!userInput}  >search</button>
        </div>
        
        
    </div>
  )
}

export default Searchbar