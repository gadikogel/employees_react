
import React from 'react';
import { useForm, } from "react-hook-form"
import axios from "../constants/urls";



const UpdateEmployee = ({ ID, name, position, salary, active, onClickSubmit,onUpdateEmployee }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const updateEmployee = async (Data) => {
        try {
            const {data,status}= await axios.put(`/employees/${ID}`, Data);
            onUpdateEmployee(Data,ID);
            console.log(data ,"status"+status);
        } catch (error) {
            console.error(error);
        }
    }

    const onSub = (data) => {
        updateEmployee(data);
        onClickSubmit()
        reset();
    }
    return (


        <div className={`container ${active ? "d-blok" : "d-none"} `}>
            <div className='w-100 d-flex justify-content-start'>
                <button onClick={onClickSubmit} className='btn btn-secondary'>X</button>

            </div>
            <form onSubmit={handleSubmit(onSub)}>

                <h1>put employee</h1>
                <div className="form-floating">

                    <div className="form-floating m-3">
                        <input defaultValue={ID}{...register("ID", { required: true, minLength: 9, maxLength: 9 })} type='text' className="form-control" placeholder="ID" />
                        <label >ID</label>
                    </div>

                    <div className="form-floating m-3">
                        <input defaultValue={name}{...register("name", { required: true, minLength: 2 })} type='text' className="form-control" placeholder="name" />
                        <label >Name</label>
                    </div>

                    <div className="form-floating m-3">
                        <input defaultValue={position}{...register("position", { required: true, minLength: 2 })} type='text' className="form-control" placeholder="position" />
                        <label >Position</label>
                    </div>

                    <div className="form-floating m-3">
                        <input defaultValue={salary}{...register("salary", { required: true, min: 6000, max: 100000 })} type='number' className="form-control" placeholder="salary" />
                        <label >Salary</label>
                    </div>
                    <button type='submit'className='btn btn-dark' >
                        send
                    </button>
                </div>
            </form>

        </div >

    )
}

export default UpdateEmployee