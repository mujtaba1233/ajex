import React,{useState} from 'react'
import UserTable from './UserTable'
import BreadCrumb from '../../../Common/BreadCrumb'
import { Container } from 'react-bootstrap'

const Users = () => {
  document.title="User | Ajex Admin & Dashboard Template";

  const [isShow, setIsShow] = useState(false)

    const hideUserModal = () => {
        setIsShow(!isShow);
    };

  return (
    <React.Fragment>
              <div className="page-content">
                <Container fluid>
                    <BreadCrumb pageTitle="User" title="User" />
                    <UserTable isShow={isShow} hideUserModal={hideUserModal}/>
                </Container>   
                </div> 
    </React.Fragment>
  )
}

export default Users
