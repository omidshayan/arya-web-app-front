import UserContent from './../../userContent/UserContent';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './Table.css';

export default function UserLilam() {
  return (
    <>
      <UserContent title="لیلام های من">
      <div className="table-wrapper">
        <table className="mainTable">
          <thead>
            <tr className="tableHead">
              <td>#</td>
              <th className="p5 bg-color font-medium">نام</th>
              <th className="p5 bg-color font-medium">وضعیت</th>
              <th className="p5 bg-color font-medium">تاریخ</th>
              <th className="p5 bg-color font-medium">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="t-a tableCulomn p-10 font-medium">23</td>
              <td className="t-a tableCulomn p-10 font-medium">$100</td>
              <td className="t-a tableCulomn p-10 font-medium">$100</td>
              <td className="t-a tableCulomn p-10 font-small">1402/12/27</td>
              <td className="tableCulomn t-a">
                <span className="tooltip-container">
                  <span className="tooltip font-small">نمایش</span>
                  <FaEye className="m5 cursor blue" />
                </span>

                <span className="tooltip-container">
                  <span className="tooltip font-small">ویرایش</span>
                  <FaEdit className="m5 cursor green" />
                </span>

                <span className="tooltip-container">
                  <span className="tooltip font-small">حذف</span>
                  <MdDelete className="m5 cursor red" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="t-a tableCulomn p-10 font-medium">2</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-small">1402/12/27</td>
              <td className=" t-a tableCulomn">
                <span className="tooltip-container">
                  <span className="tooltip font-small">نمایش</span>
                  <FaEye className="m5 curso blue" />
                </span>

                <span className="tooltip-container">
                  <span className="tooltip font-small">ویرایش</span>
                  <FaEdit className="m5 cursor green" />
                </span>

                <span className="tooltip-container">
                  <span className="tooltip font-small">حذف</span>
                  <MdDelete className="m5 cursor red" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="t-a tableCulomn p-10 font-medium">2</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-small">1402/12/27</td>
              <td className="tableCulomn t-a">
                <span className="tooltip-container">
                  <span className="tooltip font-small">نمایش</span>
                  <FaEye className="m5 cursor blue" />
                </span>

                <span className="tooltip-container">
                  <span className="tooltip font-small">ویرایش</span>
                  <FaEdit className="m5 cursor green" />
                </span>

                <span className="tooltip-container">
                  <span className="tooltip font-small">حذف</span>
                  <MdDelete className="m5 cursor red" />
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      </UserContent>
    </>
  );
}
