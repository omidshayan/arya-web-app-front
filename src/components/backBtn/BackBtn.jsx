import { IoIosArrowBack } from 'react-icons/io';
import './BackBtn.css';
import { useNavigate } from 'react-router-dom';

export default function BackBtn() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <IoIosArrowBack className='backBtnIcon' onClick={handleGoBack} />
    </>
  );
}
