import React from 'react'
import { Outlet } from 'react-router-dom'


export const StudentLayout = () => {
   


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
  return (
    <>
        <Outlet/>
    </>
  )
}
