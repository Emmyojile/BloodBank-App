import React, { useEffect, useState } from "react";
import { SetLoading } from "../../../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { Table, message } from "antd";
import { GetAllHospitalsOfOrganization } from "../../../api/users";
import { getDateFormat } from "../../../utils/helpers";

const Hospitals = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Hospital Name",
      dataIndex: "hospitalName",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (text) => getDateFormat(text),
    },
  ];

  const getData = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetAllHospitalsOfOrganization();
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
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Hospitals;
