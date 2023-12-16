import { Button, Modal, Space } from "antd";

const success = () => {
  Modal.success({
    content: 
    <>
        <div className="f-w">انتخاب دسته بندی</div>
        <div>sadjfskdf</div>
        <div>sadjfskdf</div>
    </>,
  });
};

const App = ({modalName}) => (
  <Space wrap>
    <Button onClick={success}>{modalName}</Button>
  </Space>
);
export default App;
