import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// Initialization for ES Users
import {
    Tab,
    initTE,
} from "tw-elements";
import baseURL from '../../Services/BaseUrl';
import { getSingleStudent } from '../../Services/Allapi';

initTE({ Tab });
function StudentProfile() {
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
    const StudentDetail = async () => {
        const reponse = await getSingleStudent(id)
        console.log(reponse.data);
        // const { data } = await getSingleStudent(params)
        setUserData(reponse.data)
    }
    console.log(userData);
    useEffect(() => {
        StudentDetail()
    }, [])

    // logout
    const handleLogout = () => {
        localStorage.clear()
        // window.location.reload();
        alert("You are Logout")
        navigate('/StudentStudentLogin')
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
                            src={`${baseURL}/studentUploads/${userData.profile}`}
                            class="w-32 m-5 rounded-full"
                            alt="Avatar" />
                    </li>
                    <li role="presentation" class="flex-grow text-center">
                        <a
                            href="/StudentStudentProfile"
                            class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
                            id="pills-home-tab03"
                            data-te-toggle="pill"
                            data-te-target="#pills-home03"
                            data-te-nav-active
                            role="tab"
                            aria-controls="pills-home03"
                            aria-selected="true"
                        >
                            Home
                        </a>
                    </li>
                    <li role="profile" class="flex-grow text-center">
                        <Link to={`/StudentProfileView/${id}`}>
                            <a

                                class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
                                id="pills-profile-tab03"
                                data-te-toggle="pill"
                                data-te-target="#pills-profile03"
                                role="tab"
                                aria-controls="pills-profile03"
                                aria-selected="false"
                            >

                                Profile
                            </a>
                        </Link>
                    </li>
                    <li role="contact" class="flex-grow text-center">
                        <a
                            href="/StudentStudentFeePayment"
                            class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
                            id="pills-contact-tab03"
                            data-te-toggle="pill"
                            data-te-target="#pills-contact03"
                            role="tab"
                            aria-controls="pills-contact03"
                            aria-selected="false"
                        >
                            Fee Payment
                        </a>
                    </li>
                    <li role="contact" class="flex-grow text-center">
                        <a
                            href="/StudentStudentAssigment"
                            class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
                            id="pills-contact-tab04"
                            data-te-toggle="pill"
                            data-te-target="#pills-contact03"
                            role="tab"
                            aria-controls="pills-contact03"
                            aria-selected="false"
                        >
                            Assigments
                        </a>
                    </li>
                    <li role="contact" class="flex-grow text-center">
                        <a
                            onClick={handleLogout}
                            href=""
                            class="my-2 m-5 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700"
                            id="pills-contact-tab05"
                            data-te-toggle="pill"
                            data-te-target="#pills-contact03"
                            role="tab"
                            aria-controls="pills-contact03"
                            aria-selected="false"
                        >
                            <i class="fa-solid fa-arrow-right-from-bracket fa-shake"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default StudentProfile