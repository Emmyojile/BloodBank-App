import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetAllOrganizationsOfDonor, GetAllOrganizationsOfHospital } from '../../../api/users';
import { SetLoading } from '../../../redux/loaderSlice';
import { Table, message } from 'antd';
import { getDateFormat } from '../../../utils/helpers';

const Organizations = ({userType}) => {
  const [data, setData] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'organizationName',
      render: (text) => text.toUpperCase()
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      render: (text) => getDateFormat(text)
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record) => (
        <span className="underline text-md cursor-pointer"
          onClick={() => setSelectedOrganization(record)}
        >
          HISTORY
        </span>
      )
    }
  ];

  const getData = async () => {
    try {
        dispatch(SetLoading(true));
        const response = (await userType) === "donor" ? await GetAllOrganizationsOfDonor() : await GetAllOrganizationsOfHospital();
        dispatch(SetLoading(false));
        if (response.success) {
            setData(response.data);
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        message.error(error.message);
        dispatch(SetLoading(false));
    }
}

    
      useEffect(() => {
        getData();
      },[])
  return (
    <div>
        <Table columns={columns} dataSource={data}/>
    </div>
  )
}

export default Organizations;