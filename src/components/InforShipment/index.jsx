import React, { useState } from "react";
import style from "./style.module.css";
import { Button, Modal } from "antd";

const InforShipment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.infor_Payment}>
          <p className={style.title_Payment}>Địa chỉ nhận hàng</p>
          <div className={style.infor_UserPayment}>
            <p>Tên : Hồ Thanh Phương </p>
            <p>SĐT : 0768672158 </p>
            <p>
              Địa chỉ : Địa điểm: 5/73 ấp 1 xã đông thạnh , đường nguyễn thị
              điệp, Xã Đông Thạnh, Huyện Hóc Môn, TP. Hồ Chí Minh
            </p>
          </div>
        </div>
        <Button type="primary" onClick={showModal}>
          Thay đổi
        </Button>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default InforShipment;
