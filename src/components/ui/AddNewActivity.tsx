import React, { useState } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import { Activity } from "../../model";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, createActitivity } from "../../app/index";

const ActivityWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  button.ant-btn {
    padding: 0 30px;
    min-height: 50px;
  }
  input.ant-input {
    min-height: 50px;
  }
`;
const AddNewActivity = () => {
  const [value, setValue] = useState<string>("");
  const [disable, setdisable] = useState(false);
  const dispatch = useAppDispatch();
  const onchange = (e: any) => {
    let newContent = e.target.value;

    setValue(newContent);
    if (newContent.length > 0) {
      setdisable(true);
    } else {
      setdisable(false);
    }
  };
  const handlerClick = () => {
    let newActivity: Activity = {
      id: uuidv4(),
      activity: value,
      status: "active",
    };
    dispatch(createActitivity(newActivity));
    setValue("");
  };
  const showButton =
    disable == true ? (
      <Button type="primary" onClick={handlerClick} size="large">
        Add
      </Button>
    ) : (
      <Button type="primary" size="large" disabled>
        Add
      </Button>
    );
  return (
    <ActivityWrapper>
      <Input
        placeholder="All details"
        onChange={onchange}
        value={value}
        size="large"
        type="primary"
      />
      {showButton}
    </ActivityWrapper>
  );
};

export default AddNewActivity;
