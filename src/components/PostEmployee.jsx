import axios from "../constants/urls";
import React, { useState } from 'react';
import { useForm, } from "react-hook-form"


const PostEmployee = ({ onAddEmployee, onClickClose, active}) => {

    const [Status, setStatus] = useState();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const createEmployee = async (Data) => {
        try {
            const { data, status } = await axios.post("/employees", Data);
            console.log(data);
             setStatus(status);
            onAddEmployee(data);
        } catch (error) {
            console.error(error);
        }
    }
    const onSub = (Data) => {
        createEmployee(Data);
        reset();
        onClickClose()
    }

    return (
        <>
        
        <div className={`container ${active ? "d-blok" : "d-none"} `}>
        <div className='w-100 d-flex justify-content-start'>
                <button onClick={onClickClose} className='btn btn-secondary'>X</button>

            </div>
            <form onSubmit={handleSubmit(onSub)}>
                <h1>post employee</h1>
                <div className="form-floating">

                    <div className="form-floating m-3">
                        <input {...register("ID", { required: true, minLength: 9, maxLength: 9 })} type='text' className="form-control" placeholder="ID" />
                        <label >ID</label>
                    </div>

                    <div className="form-floating m-3">
                        <input {...register("name", { required: true, minLength: 2 })} type='text' className="form-control" placeholder="name" />
                        <label >Name</label>
                    </div>

                    <div className="form-floating m-3">
                        <input {...register("position", { required: true, minLength: 2 })} type='text' className="form-control" placeholder="position" />
                        <label >Position</label>
                    </div>

                    <div className="form-floating m-3">
                    <input {...register("salary", { required: true, min: 6000, max: 100000 })} type='number' className="form-control" placeholder="salary" />
                    <label >Salary</label>
                     </div>
                <button type='submit' className="btn btn-dark">
                    send
                </button>
            </div>
            </form>
        </div >
        </>
    )

}

export default PostEmployee