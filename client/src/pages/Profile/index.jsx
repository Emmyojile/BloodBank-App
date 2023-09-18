import { Tabs } from "antd";
import Inventory from "./Inventory";
import {useSelector } from "react-redux";

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
            <Tabs.TabPane tab="Donors" key="2"></Tabs.TabPane>
            <Tabs.TabPane tab="Hospital" key="3"></Tabs.TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default Profile;
