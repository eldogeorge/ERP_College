import { getSingleFaulty } from '../../Services/Allapi'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import baseURL from '../../Services/BaseUrl'
import { ListGroup} from 'react-bootstrap'
function FacultyProfileView(props) {
    // GSES6
    const params = useParams().id

    // GSES8
    const [singleFaculty, setsingleFaculty] = useState({})

    // GSES9 call api
    const SingleFacultyDetail = async () => {
        const reponse = await getSingleFaulty(params)
        console.log(reponse.data);
        // const { data } = await getSingleStudent(params)
        setsingleFaculty(reponse.data)
    }
    console.log(singleFaculty);
    useEffect(() => {
        SingleFacultyDetail()
    }, [])



    return (
        <div>
            {
                singleFaculty ?
                    <div
                        class="grid grid-cols-1 gap-5 w-full flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row"
                        style={{ marginLeft: '25%', marginTop: '5%',backgroundColor: '#6E6E6E'}}
                    >
                        <img
                            class=" rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
                            src={`${baseURL}/facultyUploads/${singleFaculty.profile}`}
                            alt=""
                            style={{ width: '50%', borderRadius: '100%', marginLeft: '25%', marginTop: '10%',boxShadow: '1px 2px 9px '}}
                        />
                        <div 
                            class="flex flex-col justify-start m-5 p-4"
                            style={{boxShadow: '1px 2px 9px '}}
                        >
                            <h5
                                style={{color: '#BAFF39'}}
                                class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                {singleFaculty.fname + " " + singleFaculty.lname}
                            </h5>
                            <h1
                                style={{color: '#BAFF39'}}
                                class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                {singleFaculty.rollNo}
                            </h1>
                            <ListGroup className="list-group-flush ms-5 mb-4" style={{ border: 'none', }} >
                                <ListGroup.Item className='text-left' style={{ backgroundColor: '#6E6E6E', border: 'none', color: 'white' }}><strong style={{ color: '#BAFF39', marginLeft: '10%' }} className='me-3  '>Email Id:</strong>{singleFaculty.email}</ListGroup.Item>
                                <ListGroup.Item className='text-left' style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39', marginLeft: '10%' }} className='me-3'>Phone Number:</strong> {singleFaculty.mobile}</ListGroup.Item>
                                <ListGroup.Item className='text-left' style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39', marginLeft: '10%' }} className='me-3'>Gender:</strong>{singleFaculty.gender}</ListGroup.Item>
                                <ListGroup.Item className='text-left' style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39', marginLeft: '10%' }} className='me-3'>Department:</strong>{singleFaculty.department}</ListGroup.Item>
                                <ListGroup.Item className='text-left' style={{ border: 'none', backgroundColor: '#6E6E6E', color: 'white' }}><strong style={{ color: '#BAFF39', marginLeft: '10%' }} className='me-3'>Location:</strong>{singleFaculty.location}</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div> :
                    <h1>Faculty Not Found</h1>
            }
            <div className=' mt-5'>
                <Link to={'/FacultyFacultyProfile'}>
                    <button variant="" style={{ backgroundColor: '#BAFF39', width: '10%', marginRight: '10%', height: '5%' }} class='' id="button-addon2">
                        <span className='fs-4'>Back</span><i class="fa-solid fa-house fa-bounce ms-3"></i>
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default FacultyProfileView