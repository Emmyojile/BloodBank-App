import { Tabs } from "antd";
import Inventory from "./Inventory";
import {useSelector } from "react-redux";
import Donors from "./Donors";
import Hospitals from "./Hospitals";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
      <Tabs>
        {currentUser.userType === "organization" && (
          <>
            <Tabs.TabPane tab="Inventory" key="1">
                <Inventory/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Donors" key="2">
              <Donors/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hospital" key="3">
              <Hospitals/>
            </Tabs.TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default Profile;
