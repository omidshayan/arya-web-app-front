import UserContent from './../../userContent/UserContent';

export default function DeactiveLilam() {
  return (
    <>
      <UserContent title="لیلام های غیرفعال">
      <div className="table-wrapper">
        <table className="mainTable">
          <thead>
            <tr className="tableHead">
              <td>#</td>
              <th className="p5 bg-color font-medium">نام</th>
              <th className="p5 bg-color font-medium">وضعیت</th>
              <th className="p5 bg-color font-medium">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="t-a tableCulomn p-10 font-medium">23</td>
              <td className="t-a tableCulomn p-10 font-medium">$100</td>
              <td className="t-a tableCulomn p-10 font-medium">$100</td>
              <td className="t-a tableCulomn p-10 font-small">1402/12/27</td>

            </tr>
            <tr>
              <td className="t-a tableCulomn p-10 font-medium">2</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-small">1402/12/27</td>
            </tr>
            <tr>
              <td className="t-a tableCulomn p-10 font-medium">2</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-medium">$80</td>
              <td className="t-a tableCulomn p-10 font-small">1402/12/27</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      </UserContent>
    </>
  );
}
