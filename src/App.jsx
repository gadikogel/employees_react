import React, { useState, useEffect } from 'react';
import axios from "./constants/urls";
import './App.css';
import Employee from "./components/Employee"
import PostEmployee from './components/PostEmployee';
import UpdateEmployee from './components/UpdateEmployee';



const App = () => {

  const [employees, setEmployees] = useState([]);
  const [CurrentEmployeeToUpdate, setCurrentEmployeeToUpdate] = useState({});
  const [CurrentEmployeeToDelete, setCurrentEmployeeToDelete] = useState();
  const [showFormPost, setShowFormPost] = useState(false);
  const [showFormUpdate, setShowFormUpdate] = useState(false);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const resp = await axios.get("/employees");
        setEmployees(resp.data);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };
    getEmployee();
  }, []);

const onClickPost=()=>{
  setShowFormPost(true);
}

  const onClickUpdate = (ID) => {
    console.log(ID)
    setCurrentEmployeeToUpdate(employees.find(employee => employee.ID === ID));
    setShowFormUpdate(true);

  }
  const onClickDelete = async (ID) => {
    console.log(ID)
    setCurrentEmployeeToDelete(ID);

    try {
      console.log(ID);
      const response = await axios.delete(`/employees/${ID}`);
      console.log(response.status);

    } catch (error) {
      console.error('Error deleting employee:', error);
      
    }
  }
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const renderEmployees = () => {
    return employees.map((item, index) => (
      <Employee {...item} key={index} onClickUpdate={onClickUpdate} onClickDelete={() => onClickDelete(item.ID)} />
    ));
  };


  return (
    <div className=" container-fluid margin ">
      <button onClick={onClickPost}>post employee</button>
      <PostEmployee onAddEmployee={addEmployee} active={showFormPost}onClickClose ={() => setShowFormPost(false)}/>
      <UpdateEmployee {...CurrentEmployeeToUpdate} active={showFormUpdate} onClickSubmit={() => setShowFormUpdate(false)} />
      <div className='row '>
        {renderEmployees()}

      </div>
      


    </div>
  )

}
export default App