import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from "../../redux/loaderSlice";
import { GetAllBloodGroupsData } from "../../api/dashboard";
import { getLoggedInUserName } from "../../utils/helpers";

const Home = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [bloodGroupsData, setBloodGroupsData] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetAllBloodGroupsData();
      dispatch(SetLoading(false));
      if (response.success) {
        setBloodGroupsData(response.data);
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

  const colors = [
    "#1D5B79",
    "#1a5f2a",
    "#88621b",
    "#245953",
    "#8ECDDD",
    "#618264",
    "#F78CA2",
    "#AE445A",
  ];

  return (
    <div>
      <span className="text-primary text-2xl">
        Welcome {getLoggedInUserName(currentUser)}
      </span>

      <div className="grid grid-cols-4 gap-5 mt-5">
        {bloodGroupsData.map((bloodGroup, index) => {
          const color = colors[index];
          return (
            <div
              className={`bg-[black] p-5 flex justify-between text-white rounded items-center`}
              style={{ backgroundColor: color }}
            >
              <h1 className="text-5xl">{bloodGroup.bloodGroup}</h1>

              <div className="flex flex-col justify-between gap-2">
                <div className="flex justify-between gap-5">
                  <span>Total In</span>
                  <span>{bloodGroup.totalIn} ML</span>
                </div>
                <div className="flex justify-between gap-5">
                  <span>Total Out</span>
                  <span>{bloodGroup.totalOut} ML</span>
                </div>
                <div className="flex justify-between gap-5">
                  <span>Available</span>
                  <span>{bloodGroup.available} ML</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
      </div>
  );
};

export default Home;
