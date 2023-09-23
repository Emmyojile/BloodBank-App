import React, { useEffect, useState } from 'react'
import { GetInventoryByFilters } from '../api/inventory';
import { Table, message } from 'antd';
import { SetLoading } from '../redux/loaderSlice';
import { getDateFormat } from '../utils/helpers';
import { useDispatch } from 'react-redux';

const InventoryTable = ({filters, userType, limit}) => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const columns = [
      {
        title: 'Inventory Type',
        dataIndex: 'inventoryType',
        render: (text) => text.toUpperCase()
      },
      {
        title: 'Blood Group',
        dataIndex: 'bloodGroup',
        render: (text) => text.toUpperCase()
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        render: (text) => text + ' ML'
      },
      {
        title: 'Reference',
        dataIndex: 'reference',
        render: (text, record)  => record.organization.organizationName
      },
      {
        title: 'Date',
        dataIndex: 'createdAt',
        render: (text) => getDateFormat(text)
      }
    ];
  
    const getData = async () => {
      try {
        dispatch(SetLoading(true));
        const response = await GetInventoryByFilters(filters, limit);
        dispatch(SetLoading(false));
        if(response.success) {
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
    <div><Table columns={columns} dataSource={data} className="mt-3"/></div>
  )
}

export default InventoryTable