import React from 'react'
import baseURL from '../../Services/BaseUrl'
import {Image } from 'react-bootstrap'
// Initialization for ES Users
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';
initTE({ Dropdown, Ripple });

function TableFaculty({facultystoDisplay,delFaculty}) {
    return (
        <div class="container mx-auto">
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">S No.</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Roll Number</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Name</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Phone Number</th>
                                        {/* <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Email</th> */}
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Profile</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Department</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        facultystoDisplay?.length > 0 ? facultystoDisplay.map((s, index) => (
                                            <tr
                                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.rollNo}</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.fname + " " + s.lname}</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.mobile}</td>
                                                {/* <td class="whitespace-nowrap px-6 py-4">{i.email}</td> */}
                                                <td>
                                                    {/* GEIS2 */}
                                                    <Image src={`${baseURL}/facultyUploads/${s.profile}`} roundedCircle style={{ width: '100px' }} className='ms-3' />
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.department}</td>
                                                <td>
                                                    
                                                            <>
                                                                <Link to={`/Facultyview/${s._id}`}>
                                                                    <a
                                                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"

                                                                        data-te-dropdown-item-ref
                                                                    >
                                                                        <i class="fa-regular fa-eye fa-beat-fade me-3"></i>View
                                                                    </a>
                                                                </Link>
                                                            </>
                                                            <>
                                                                <Link to={`/Facultyedit/${s._id}`}>
                                                                    <a
                                                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"

                                                                        data-te-dropdown-item-ref
                                                                    >
                                                                        <i class="fa-solid fa-scissors fa-shake me-3"></i>Edit
                                                                    </a>
                                                                </Link>
                                                            </>
                                                            <>

                                                                <a
                                                                    onClick={() => delFaculty(s._id)}
                                                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"

                                                                    data-te-dropdown-item-ref
                                                                >
                                                                    <i class="fa-solid fa-trash-can fa-bounce me-3"></i>Delete
                                                                </a>

                                                            </>
                                                        {/* </ul>
                                                    </div> */}
                                                </td>
                                            </tr>
                                        )) : <p>No Faculty Are Presents</p>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableFaculty