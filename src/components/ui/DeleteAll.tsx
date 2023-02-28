import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useAppDispatch, deleteAllActivity } from "../../app/index";
import { useState } from "react";

const DeleteWrapper = styled.div`
  .deleteall {
    display: flex;
    min-width: 100%;
    justify-content: flex-end;
    padding: 20px 0;
    button.ant-btn-dangerous {
      padding: 0 30px;
      min-height: 50px;
    }
  }
`;
const DeleteAll = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const openModal = () => {
    setisModalOpen((isModalOpen) => !isModalOpen);
  };
  const handleOk = () => {
    dispatch(deleteAllActivity());
    setisModalOpen((isModalOpen) => !isModalOpen);
  };
  const handleCancel = () => {
    setisModalOpen((isModalOpen) => !isModalOpen);
  };
  return (
    <DeleteWrapper>
      <Modal
        centered
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} danger>
            Delete All
          </Button>,
        ]}
      >
        <p style={{ textAlign: "center" }}>
          Do you want to Delete all activities completely?
        </p>
      </Modal>
      <div className="deleteall">
        <Button type="primary" onClick={openModal} danger>
          <DeleteOutlined />
          Delete All
        </Button>
      </div>
    </DeleteWrapper>
  );
};

export default DeleteAll;
