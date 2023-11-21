import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
// Initialization for ES Users
import {
  Input,
  initTE,
} from "tw-elements";

initTE({ Input });

function FacultyAssigment() {
  const navigate = useNavigate()

  const assigmentSend = () => {
    alert("Assigment has Submit Successfully ")
    navigate('/FacultyFacultyProfile')
  }
  return (
    <div>
      {/* Departments */}
      <div class="relative mb-10 mt-10 flex flex-wrap items-stretch m-10 w-1/3 ">
        <label
          class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          for="inputGroupSelect01"
        >
          Department
        </label>
        <select
          // RSS7.1
          name='department'
          required
          class="form-select relative  block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          id="inputGroupSelect01">
          <option selected>Choose...</option>
          {/* // RSS7.1.1 */}
          <option value={'COMPUTER SCIENCE AND ENGINEERING'}>COMPUTER SCIENCE AND ENGINEERING</option>
          <option value={'MECHANICAL ENGINEERING'}>MECHANICAL ENGINEERING</option>
          <option value={'CIVIL ENGINEERING'}>CIVIL ENGINEERING</option>
          <option value={'ELECTRICAL AND ELECTRONICS ENGINEERING'}>ELECTRICAL AND ELECTRONICS ENGINEERING</option>
          <option value={'ELECTRONICS AND COMMUNICATION ENGINEERING'}>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
          <option value={'INFORMATION TECHNOLOGY'}>INFORMATION TECHNOLOGY</option>
          <option value={'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE'}>ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</option>
        </select>
      </div>
      {/* Departments */}
      <div class="relative mb-10 mt-10 flex flex-wrap items-stretch m-10 w-1/3 ">
        <label
          class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          for="inputGroupSelect01"
        >
          Year
        </label>
        <select
          // RSS7.1
          name='department'
          required
          class="form-select relative  block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          id="inputGroupSelect01">
          <option selected>Choose...</option>
          {/* // RSS7.1.1 */}
          <option value={'1st Year'}>1st Year</option>
          <option value={'2nd Year'}>2nd Year</option>
          <option value={'3th Year'}>3th Year</option>
          <option value={'4th Year'}>4th Year</option>

        </select>
      </div>
      <div class="relative w-1/2" style={{ marginLeft: '25%', marginTop: '10%' }} data-te-input-wrapper-init>

        <textarea
          class="peer m-5 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlTextarea1"
          rows="4"
          placeholder="Your message">
        </textarea>
        <label
          for="exampleFormControlTextarea1"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Assigment Question
        </label>
      </div>
      <button
        type="button"
        onClick={assigmentSend}
        class="inline-block rounded bg-success mt-5 w-1/6  pb-2 pt-2.5 text-l font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        <i class="fa-solid fa-file-import fa-bounce"></i> Send
      </button>
      <Link to={'/FacultyFacultyProfile'}>
        <button
          type="button"
          class="inline-block rounded bg-warning ms-10 mt-5 w-1/6  pb-2 pt-2.5 text-l font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <i class="fa-solid fa-right-from-bracket fa-bounce"></i> Back
        </button>
      </Link>
    </div>
  )
}

export default FacultyAssigment