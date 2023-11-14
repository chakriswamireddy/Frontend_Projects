import React from 'react'
import pin from '../Images/pin.png'
import point from '../Images/point.png'

function ShowAddress({gotAddress}) {
  return (
    <div>
        {gotAddress && (
        <h4> locations </h4>
        )}
        { gotAddress && gotAddress.places.map((item)=> (
            <div className='location-box'>
                <div>
                    <img src={pin} alt="" />
                </div>

                <div className='location-data'>
                    <p>{item["place name"]} </p>
                    <p> {item.state} ({item["state abbreviation"]}) </p>
                    <p> {gotAddress.country} ({gotAddress["country abbreviation"]})  </p>

                <div>
                    
                </div>

                </div>
                <div>


                    <img src={point} alt="" />
                    <span> {item.longitude} </span>
                    <span> {item.latitude} </span>                   
                </div>

                
                
            </div>
        ))}


    </div>
  )
}

export default ShowAddress