import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import baseURL from '../../Services/BaseUrl';
// Initialization for ES Users
import {
  Input,
  initTE,
} from "tw-elements";
import { getSingleFaulty } from '../../Services/Allapi';

initTE({ Input });
function FacultyProfile() {

  if (localStorage.getItem('Email')) {
    const email = localStorage.getItem("Email")
    const id = localStorage.getItem("id")
    console.log(email);
    console.log(id);
  }
  const navigate = useNavigate()
  const id = localStorage.getItem("id")
  // api call
  const [userData, setUserData] = useState("")
  const FacultyDetail = async () => {
    const reponse = await getSingleFaulty(id)
    console.log(reponse.data);
    // const { data } = await getSingleStudent(params)
    setUserData(reponse.data)
  }
  console.log(userData);
  useEffect(() => {
    FacultyDetail()
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    // window.location.reload();
    alert("You are Logout")
    navigate('/FacultyFacultyLogin')
  }
  return (
    <div>
      {/* <!--Pills navigation--> */}
      <div class="flex items-start">
        <ul
          class="mr-4 bg-info m-5  flex list-none flex-col flex-wrap pl-0"
          role="tablist"
          data-te-nav-ref>
          <li>
            <img
              src={`${baseURL}/facultyUploads/${userData.profile}`}
              class="w-32 m-5 rounded-full"
              alt="Avatar" />
          </li>
          <li role="presentation" class="flex-grow text-center">
            <a
              href="/FacultyFacultyProfile"
              class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
              id="pills-home-tab03"
              data-te-toggle="pill"
              data-te-target="#pills-home03"
              data-te-nav-active
              role="tabpanel"
              aria-controls="pills-home03"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li role="profile" class="flex-grow text-center">
            <Link to={`/FacultyProfileView/${id}`}>
              <a
                class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
                id="pills-profile-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-profile03"
                role="tabpanel"
                aria-controls="pills-profile03"
                aria-selected="false"
              >
                Profile
              </a>
            </Link>
          </li>

          {/* Attendance */}
          <li role="attendance" class="flex-grow text-center">
            <a
              href="/FacultyFacultyAttendance"
              class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
              id="pills-assigment-tab03"
              data-te-toggle="pill"
              data-te-target="#pills-assigment03"
              role="tabpanel"
              aria-controls="pills-assigment03"
              aria-selected="false"
            >
              Attendance
            </a>
          </li>

          {/* Assigments */}
          <li role="assigment" class="flex-grow text-center">
            <a
              href="/FacultyAssigment"
              class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
              id="pills-assigment-tab03"
              data-te-toggle="pill"
              data-te-target="#pills-assigment03"
              role="tabpanel"
              aria-controls="pills-assigment03"
              aria-selected="false"
            >
              Assigments
            </a>
          </li>

          {/* Login */}
          <li role="login" class="flex-grow text-center">
            <a
              onClick={handleLogout}
              href=""
              class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
              id="pills-login-tab03"
              data-te-toggle="pill"
              data-te-target="#pills-login03"
              role="tabpanel"
              aria-controls="pills-login03"
              aria-selected="false"
            >
              <i class="fa-solid fa-arrow-right-from-bracket fa-shake"></i> Logout
            </a>
          </li>
        </ul>

        {/* <!--Pills content--> */}
        <div class="my-2">

          {/* Home */}
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-home03"
            role="tabpanel"
            aria-labelledby="pills-home-tab03"
            data-te-tab-active>
            
          </div>

          {/* Profile */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-profile02"
            role="tabpanel"
            aria-labelledby="pills-profile-tab03">

          </div>

          {/* assigment */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-assigment03"
            role="tabpanel"
            aria-labelledby="pills-assigment-tab03">
           
          </div>
          {/* logout */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-login03"
            role="tabpanel"
            aria-labelledby="pills-contact-tab03">
            <a href="/StudentStudentLogin"></a>
          </div>
        </div>
        {/* <FacultyProfileView id={id} */}
        {/* /> */}
      </div>
    </div>

  )
}

export default FacultyProfile