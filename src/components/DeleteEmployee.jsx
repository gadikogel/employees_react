import React from 'react';
import axios from "../constants/urls";

const DeleteEmployee = ({ ID }) => {
  
    const deleteEmployee = async () => {
      try {
        console.log(ID+"jj");
        const response = await axios.delete(`/employees/${ID}`);
        console.log(response.status);
        // Optionally, you can perform additional actions after successful deletion
      } catch (error) {
        console.error('Error deleting employee:', error);
        // Handle error scenarios here
      }
    };

    
    return (
      <div>
       <button onClick={deleteEmployee}>vvvv</button>
      </div>
    )
  }


export default DeleteEmployee