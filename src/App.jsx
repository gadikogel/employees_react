import React, { useState, useEffect } from 'react';
import axios from "./constants/urls";
import './App.css';
import Employee from "./components/Employee"
import PostEmployee from './components/PostEmployee';
import UpdateEmployee from './components/UpdateEmployee';

const App = () => {

  const [employees, setEmployees] = useState([]);
  const [CurrentEmployeeToUpdate, setCurrentEmployeeToUpdate] = useState({});
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

  const onClickPost = () => {
    setShowFormPost(true);
  }

  const onClickUpdate = (ID) => {
    console.log(ID)
    setCurrentEmployeeToUpdate(employees.find(employee => employee.ID === ID));
    setShowFormUpdate(true);
  }
  const DeletEmployee = async (ID) => {
    console.log(ID);
    try {
      console.log(ID);
      const {status} = await axios.delete(`/employees/${ID}`);
      setEmployees(employees.filter(employee => employee.ID !== ID))
      console.log(status);
      alert("user  "+ID+"  deleted successfully");

    } catch (error) {
      console.error('Error deleting employee:', error);

    }
  }
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };
  const updateEmployee = (data,ID) => {
    console.log(data);
    setEmployees(Employees =>Employees.map(employee => {
      if (employee.ID === ID) {
        return data;
      }
      return employee;
    }));
  };

  const renderEmployees = () => {
    return employees.map((item, index) => (
      <Employee {...item} key={index} onClickUpdate={onClickUpdate} onClickDelete={() => DeletEmployee(item.ID)} />
    ));
  };

  return (
    <div className=" container-fluid ">
      <button onClick={onClickPost}className='mb-3 btn btn-info'>post employee</button>
      <PostEmployee onAddEmployee={addEmployee} active={showFormPost} onClickClose={() => setShowFormPost(false)} />
      <UpdateEmployee {...CurrentEmployeeToUpdate} onUpdateEmployee={updateEmployee} active={showFormUpdate} onClickSubmit={() => setShowFormUpdate(false)} setEmployees/>
      <div className='row '>
        {renderEmployees()}
      </div>
    </div>
  )

}
export default App