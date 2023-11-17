import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';


export default function Sidebar(props: {setShow:boolean}) {

  return (
    <>
    <div className="overlay sidebarActive"></div>
        <div className="sidebar sidebarActive">
            <div className="topSidebar">
                <div className="logoSidebar"><img src="img/logo.png" alt="" /></div>
                <div className="closeSidebar"><CloseIcon /></div>
            </div>
        </div>
    </>
  )
}
