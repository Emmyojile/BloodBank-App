import { message } from "antd";
import { GetCurrentUser } from "../api/users";
import { useEffect, useState } from "react";


const ProtectedPages = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const getCurrentUser = async () => {
        try {
            const response = await GetCurrentUser();
            if (response.success) {
                message.success(response.message);
                setCurrentUser(response.data);
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    }

    useEffect(() => {
        getCurrentUser()
    },[])

  return <div>
    {currentUser && <h1>Welcome {currentUser.name}</h1>}
    {children}</div>;
};

export default ProtectedPages;
