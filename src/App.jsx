import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import MyCards from './Components/MyCards'

const App = () => {
const [users, setusers] = useState([])
const [inputData, setinputData] = useState("")
  const URL = "https://6774e84f92222241481a2d7f.mockapi.io/api/v1/employees"


  useEffect(() => {
    const promisede = async () => {
      let fetchData = await fetch(URL)
      let fetchURL = await fetchData.json()
      setusers(fetchURL)

      
    }
    promisede()
    
    
    
    
    
  }, [])
  console.log("🚀 ~ useEffect ~ users:", users)
  

  

  
  return (
    <div>
      <Header inputData={inputData} setinputData={setinputData}/>
      <MyCards users={users} inputData={inputData} />
    </div>
  )
}

export default App
