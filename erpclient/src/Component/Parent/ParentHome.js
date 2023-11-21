import React, { useEffect, useState } from 'react'
import AdminHeader from '../Admin/AdminHeader'
import {
    Ripple,
    Input,
    initTE,
} from "tw-elements";
import TableParent from './TableParent';
import SpinningC from '../SpinningC';
initTE({ Ripple, Input });
function ParentHome() {
    // state to handle the spain
    const [showSpain, setSpain] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setSpain(true)
        }, 1000)
    })
    return (

        <div>
            <AdminHeader></AdminHeader>

            <div class="container">
                <div class="row">
                    <div class="grid lg:grid-cols-3">
                        <div class="m-3">
                            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                                <input
                                    type="search"
                                    class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon3" />

                                {/* <!--Search button--> */}
                                <button
                                    class="relative border-2 bg-success px-6 py-2 text-xs font-medium uppercase text-light transition duration-150 ease-in-out hover:bg-success hover:bg-success-5 focus:outline-none focus:ring-0"
                                    type="button"
                                    id="button-addon3"
                                    data-te-ripple-init
                                    style={{ width: '30%' }}
                                >
                                    <i class="fa-solid fa-magnifying-glass fa-fade me-3"></i><span className='fs-4'>Search</span>

                                </button>
                            </div>
                        </div>
                        <div></div>
                        <div class='m-3'>
                            <button
                                type="button"
                                class="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                                style={{ width: '30%', height: '72%' }}
                            >
                                <i class="fa-solid fa-user-plus fa-shake"></i> Add
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {
                // GES9 then goto tableE.js  RES6 then goto tableE.js
                showSpain ? <TableParent></TableParent> : <SpinningC></SpinningC>

            }
        </div>
    )
}

export default ParentHome