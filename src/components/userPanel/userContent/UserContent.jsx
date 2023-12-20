import "./UserContent.css";
import UserSidebar from "../userSidebar/UserSidebar";

export default function UserContent({ title, children }) {
  return (
    <>
      <div className="singleContainer d-flex showSingle">
        <UserSidebar  className='ss'/>
        <div className="userContent p-10">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
}
