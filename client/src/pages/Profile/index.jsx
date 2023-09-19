import { Tabs } from "antd";
import Inventory from "./Inventory";
import { useSelector } from "react-redux";
import Donors from "./Donors";
import Hospitals from "./Hospitals";
import Organizations from "./Organizations";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
      <Tabs>
        {currentUser.userType === "organization" && (
          <>
            <Tabs.TabPane tab="Inventory" key="1">
              <Inventory />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Donors" key="2">
              <Donors />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hospital" key="3">
              <Hospitals />
            </Tabs.TabPane>
          </>
        )}

        {currentUser.userType === "donor" && (
          <>
            <Tabs.TabPane tab="Donations" key="1"></Tabs.TabPane>
            <Tabs.TabPane tab="Organizations" key="2">
              <Organizations userType="donor"/>
            </Tabs.TabPane>
          </>
        )}

        {currentUser.userType === "hospital" && (
          <>
            <Tabs.TabPane tab="Consumptions" key="1"></Tabs.TabPane>
            <Tabs.TabPane tab="Organizations" key="2">
              <Organizations userType="hospital" />
            </Tabs.TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default Profile;
