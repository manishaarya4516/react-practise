import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>copyright @ {year}</div>
  )
}
