import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import ShowAddress from './ShowAddress'
import axios from 'axios'


function HomePage() {
    const [searchedZip,setSearchedZip] = useState(null)

    const [gotAddress,setGotAddress] = useState(null)

    const HandleZipSubmit=(value) => {
        setSearchedZip(value)
    }
    


    useEffect(()=>{
        axios.get(`https://api.zippopotam.us/in/${searchedZip}`)
            .then(response=>response.data)
            .then( (data) => {
                 setGotAddress(data)
                 console.log(data)
            })
            .catch(error => console.log(error) )

    },[searchedZip])

  return (
    <div className='homepage' >
        <Searchbar searchedZip={searchedZip} HandleZipSubmit={HandleZipSubmit} />
        <ShowAddress gotAddress={gotAddress}  />

    </div>
  )
}

export default HomePage