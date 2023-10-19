import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FilterSection, Footer, InputField, Logo, MainContainer, Nav, PageNumber, Status, SubNav, Table, UserDetails } from './HomePageStyle';
import logo from '../../assets/images/Group 366.png'
import { TbLogout } from 'react-icons/tb'
import { MdFilterListAlt } from 'react-icons/md'
import UserImage from '../../assets/images/Frame 337.png'
import { FaDownload } from 'react-icons/fa'
import { BiSolidMessage } from 'react-icons/bi'
import patientDetails from './data.json'
import axios from 'axios';
import { BsTelephone } from 'react-icons/bs';

function HomePage() {
    const location = useLocation();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    console.log(location.state);
    const data = patientDetails.data;
    const itemsPerPage = 5;

    // useEffect(() => {
    //     Here data can be fetched with sending the user-id from the login credentials which can be stored in a state (useContext) or localstorage as a params
    // }, [])

    //Filtering data with doctor name,patient id,date,test,name,bill no
    const filteredData = data.filter((item) => {
        return item.doctor.toLowerCase().includes(search.toLowerCase()) ||
            item.date.includes(search) ||
            item.test_name.toLowerCase().includes(search.toLowerCase()) ||
            item.patient_details.patient_name.toLowerCase().includes(search.toLowerCase())
    })

    //Setting no of items per page from the filtered array using slice method
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    console.log("currentItems", currentItems);

    // Page number based on the items in the array
    const pageNumbers = [];
    for (let i = 1; i <= filteredData.length / itemsPerPage; i++) {
        pageNumbers.push(i);
    }

    const handlePage = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActivePage(pageNumber);
    }
    return (
        <>
            <Nav>
                <Logo src={logo} />
                <UserDetails>
                    <p>Username</p>
                    <img src={UserImage} />
                    <span><TbLogout size={25} /></span>
                </UserDetails>
            </Nav>
            <SubNav>
                <h3>Patient Reports</h3>
                <FilterSection>
                    <button>Apply Filter <span><MdFilterListAlt /></span></button>
                    <InputField placeholder='Search by Doctor Name/ Patient Name/ Test Name...' value={search} onChange={(e) => setSearch(e.target.value)} />
                </FilterSection>
            </SubNav>
            <Table >
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Date</th>
                        <th>Patient Name</th>
                        <th>Hospital ID</th>
                        <th>Test Name No</th>
                        <th>Doctor Name</th>
                        <th>ETA</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item?.order_id}</td>
                            <td>{item?.date}</td>
                            <td>{item?.patient_details.patient_name}</td>
                            <td>{item?.hospital_id}</td>
                            <td>{item?.test_name}</td>
                            <td>{item?.doctor}</td>
                            <td>{item?.eta}</td>
                            <Status status={item?.status}><div>{item?.status}</div></Status>
                            <td style={{display:'flex'}}><span>{item?.status === 'Lab Dropped' ? '' : <FaDownload size={20} color='#1F6CAB' />}</span> <span><BiSolidMessage style={{ marginLeft: '10px' }} size={20} color='#1F6CAB' /></span></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <PageNumber>
                {pageNumbers.map((number) =>
                    <li key={number}>
                        <button style={{ backgroundColor: number === activePage ? '#1F6CAB' : 'transparent', }} onClick={() => handlePage(number)}>{number}</button>
                    </li>
                )}
            </PageNumber>
            <Footer>
                <p>Copyright © 2023 Access Home Lab Solutions</p>
                <p><span><BsTelephone color='#1F6CAB' /> </span>(+91) 9288008801</p>
                <p><span>All Rights Reserved</span> | Terms and Conditions | Privacy Policy</p>
            </Footer>
        </>
    )
}

export default HomePage