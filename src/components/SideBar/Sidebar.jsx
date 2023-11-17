import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';



export default function Sidebar({showSlider, closeSlider}) {
  return (
    <>
    <div className={`overlay ${showSlider ? 'overlayActive' : ''}`} onClick={() => closeSlider(false)}></div>
        <div className={`sidebar ${showSlider ? 'sidebarActive' : ''}`}>
            <div className="topSidebar">
                <div className="logoSidebar"><img src="img/logo.png" alt="" /></div>
                <div className="closeSidebar" onClick={() => closeSlider(false)}><CloseIcon /></div>
            </div>
        </div>
    </>
  )
}
