import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import StudentRegister from './Component/Student/StudentRegister';
import FacultyLogin from './Component/Faculty/FacultyLogin';
import FacultyRegister from './Component/Faculty/FacultyRegister';
import ParentLogin from './Component/Parent/ParentLogin';
import AdminLogin from './Component/Admin/AdminLogin';
import StudentLogin from './Component/Student/StudentLogin';
import StudentHome from './Component/Student/StudentHome';
import Pnf from './Component/Pnf';
import { Datepicker, Input, initTE } from "tw-elements";
import { useEffect } from 'react';
import Adminhome from './Component/Admin/Adminhome';
import ERPLogin from './Component/ERPLogin';
import FacultyHome from './Component/Faculty/FacultyHome';
import ParentHome from './Component/Parent/ParentHome';
import StudentView from './Component/Student/StudentView';
import StudentEdit from './Component/Student/StudentEdit';
import StudentProfile from './Component/Student/StudentProfile';
import FacultyView from './Component/Faculty/FacultyView';
import FacultyEdit from './Component/Faculty/FacultyEdit';
import FacultyProfile from './Component/Faculty/FacultyProfile';
import StudentProfileView from './Component/Student/StudentProfileView';
import FacultyProfileView from './Component/Faculty/FacultyProfileView';
import FacultyAssigment from './Component/Faculty/FacultyAssigment';
import StudentFeePayment from './Component/Student/StudentFeePayment';
import StudentAsgm from './Component/Student/StudentAsgm';

function App() {
  
    useEffect(() => {
      initTE({ Datepicker, Input });
    }, []);
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/ERPLogin' element={<ERPLogin></ERPLogin>}/>
          <Route path='/AdministratorAdminLogin' element={<AdminLogin></AdminLogin>}/>
          <Route path='/AdministratorAdminHome' element={<Adminhome></Adminhome>}/>
          <Route path='/StudentStudentHome' element={<StudentHome></StudentHome>}/>
          <Route path='/StudentStudentLogin' element={<StudentLogin></StudentLogin>}/>
          <Route path='/StudentStudentRegister' element={<StudentRegister></StudentRegister>}/>
          <Route path='/Studentview/:id' element={<StudentView></StudentView>}/>
          <Route path='/Studentedit/:id' element={<StudentEdit></StudentEdit>}/>
          <Route path='/StudentProfileView/:id' element={<StudentProfileView></StudentProfileView>}/>
          <Route path='/StudentStudentProfile' element={<StudentProfile></StudentProfile>}/>
          <Route path='/StudentStudentFeePayment' element={<StudentFeePayment></StudentFeePayment>}/>
          <Route path='/StudentStudentAssigment' element={<StudentAsgm></StudentAsgm>}/>
          <Route path='/FacultyFacultyHome' element={<FacultyHome></FacultyHome>}/>
          <Route path='/FacultyFacultyLogin' element={<FacultyLogin></FacultyLogin>}/>
          <Route path='/FacultyFacultyRegister' element={<FacultyRegister></FacultyRegister>}/>
          <Route path='/Facultyview/:id' element={<FacultyView></FacultyView>}/>
          <Route path='/Facultyedit/:id' element={<FacultyEdit></FacultyEdit>}/>
          <Route path='/FacultyFacultyProfile' element={<FacultyProfile></FacultyProfile>}/>
          <Route path='/FacultyProfileView/:id' element={<FacultyProfileView></FacultyProfileView>}/>
          <Route path='/FacultyAssigment' element={<FacultyAssigment></FacultyAssigment>}/>
          <Route path='/ParentParentLogin' element={<ParentLogin></ParentLogin>}/>
          <Route path='/ParentParentHome' element={<ParentHome></ParentHome>}/>
          <Route path='*' element={<Pnf></Pnf>}/>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
