import React from 'react'
import { AddPetForm } from '../../components/AddPetForm/AddPetForm'

const  AddPetPage=()=> {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center' }}>
    <AddPetForm/>
    </div>
  )
}
export default React.memo(AddPetPage)
