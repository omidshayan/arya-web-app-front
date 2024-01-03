import "./UserContent.css";
import UserSidebar from "../userSidebar/UserSidebar";
import UserContext from "../../../Context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function UserContent({ title, children }) {
  const navigate = useNavigate();
  const {isLoggdIn} = useContext(UserContext);

  // useEffect(() => {
  //   if (!isLoggdIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggdIn, navigate]);

  return (
    <>
      <div className="singleContainer d-flex showSingle">
        <UserSidebar className='ss' />
        <div className="userContent p-10">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
}
