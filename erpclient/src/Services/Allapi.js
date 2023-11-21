// AAS3 import baseurl

import baseURL from "./BaseUrl"
import { commonRequest } from "./commonRequest"

// AAS4 create api request for student register then goto studentregister
export const studentRegisterAPI=async(header,body)=>{
    return await commonRequest("POST",`${baseURL}/student/register`,body,header)
}

// GASS4 then goto students home.js
export const getAllStudents=async(search)=>{
    return await commonRequest("GET",`${baseURL}/student/getStudentDetails?search=${search}`,"")
}

// GSES5 get single employee,then goto view.js
export const getSingleStudent=async(id)=>{
    return await commonRequest("GET",`${baseURL}/student/singleStudentDetail/${id}`,"")
}

// Delete
export const removeStudent=async(id)=>{
    return await commonRequest("DELETE",`${baseURL}/student/removeStudent/${id}`,{})
}

// edit
export const editStudent=async(id,header,body)=>{
    return await commonRequest("PUT",`${baseURL}/student/updateStudent/${id}`,body,header)
}

// faculty
// AAS4 create api request for faculty register then goto facultyregister
export const facultyRegisterAPI=async(header,body)=>{
    return await commonRequest("POST",`${baseURL}/faculty/register`,body,header)
}

// GASS4 then goto faculty home.js
export const getAllFacultys=async(search)=>{
    return await commonRequest("GET",`${baseURL}/faculty/getFacultyDetails?search=${search}`,"")
}

// GSES5 get single employee,then goto view.js
export const getSingleFaulty=async(id)=>{
    return await commonRequest("GET",`${baseURL}/faculty/singleFacultyDetail/${id}`,"")
}

// Delete
export const removeFaculty=async(id)=>{
    return await commonRequest("DELETE",`${baseURL}/faculty/removeFaculty/${id}`,{})
}

// edit
export const editFaculty=async(id,header,body)=>{
    return await commonRequest("PUT",`${baseURL}/faculty/updateFaculty/${id}`,body,header)
}