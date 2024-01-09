import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate();

    return (

    <div style={{textAlign: "center"}}>
      <h1> ERROR PAGE</h1>
        <button onClick={()=> navigate("/")}> Volver a Home </button>

    </div>
  )
}

export default ErrorPage
