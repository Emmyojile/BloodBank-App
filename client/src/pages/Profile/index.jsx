import { Tabs } from "antd";
import Inventory from "./Inventory";
import { useSelector } from "react-redux";
import Donors from "./Donors";
import Hospitals from "./Hospitals";
import Organizations from "./Organizations";
import InventoryTable from "../../components/InventoryTable";

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
            <Tabs.TabPane tab="Donations" key="1">
              <InventoryTable
                filters={{
                  inventoryType: "in",
                  donor: currentUser._id,
                }}
                userType="donor"
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Organizations" key="2">
              <Organizations userType="donor" />
            </Tabs.TabPane>
          </>
        )}

        {currentUser.userType === "hospital" && (
          <>
            <Tabs.TabPane tab="Consumptions" key="1">
              <InventoryTable
                filters={{
                  inventoryType: "out",
                  hospital: currentUser._id,
                }}
                userType="hospital"
              />
            </Tabs.TabPane>
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
