import React from 'react'

const Employee = ({ ID, name, position, salary, onClickUpdate, onClickDelete }) => {

  return (
    <div className='container d-flex justify-content-between col-md-5 border broder-1 m-3'>
      <div className='d-flex justify-content-around align-items-center'>
        <img className='' width={120} src="../public/images/profil.png" alt="" />
      </div>
      <div className='row justify-content-between'>

        <h6 className=' p-2 '>ID: {ID}</h6>
        <h6 className=' p-2'>name: {name}</h6>
        <h6 className=' p-2'>positioin: {position}</h6>
        <h6 className=' p-2'>salary: {salary}</h6>
      </div>
      <div className='d-flex flex-column  justify-content-center align-items-center my-3 '>
        <button className='btn btn-success' onClick={() => onClickUpdate(ID)}>update</button>
        <button className='btn btn-danger' onClick={() => onClickDelete(ID)}>delete</button>

      </div>
    </div>
  )
}

export default Employee