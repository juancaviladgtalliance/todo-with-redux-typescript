import React, { useState, useEffect } from "react";
import { List, Typography, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Activity } from "../../model";
import { useAppDispatch, editActivity, deleteActivity } from "../../app/index";
import { useLocation } from "react-router-dom";
const { Text } = Typography;

interface ListProps {
  list: Activity[];
}
interface ActivityProps {
  item: Activity;
}
const ListWrapper = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  input.checkbox {
    margin: 0;
    background: white;
    width: 23px;
    position: absolute;
    height: 23px;
    opacity: 0;
    z-index: 2;
  }
  label {
    position: relative;
    cursor: pointer;
  }
  label:before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #0079bf;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
  }
  input:checked + label:after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid #0079bf;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
const Item = ({ item }: ActivityProps) => {
  const [isChecked, setisChecked] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handlerCheck = (e: any) => {
    setisChecked((isChecked) => !isChecked);
    if (e.target.checked) {
      let newState: Activity = { ...item, status: "completed" };
      dispatch(editActivity(newState));
    } else {
      dispatch(editActivity({ ...item, status: "active" }));
    }
  };

  const handlerDeleted = () => {
    let deleteState: Activity = { ...item, status: "deleted" };
    dispatch(deleteActivity(deleteState));
  };
  useEffect(() => {
    switch (item.status) {
      case "completed":
        setisChecked(true);
        break;

      default:
        setisChecked(false);
        break;
    }
  }, []);
  const textTitle = isChecked ? (
    <Text delete> {item.activity} </Text>
  ) : (
    <Text> {item.activity} </Text>
  );

  const deleteItem =
    item.status == "completed" && location.pathname == "/completed" ? (
      <Button type="text" onClick={handlerDeleted}>
        <DeleteOutlined />
      </Button>
    ) : null;
  return (
    <List.Item key={item.id}>
      <ItemWrapper>
        <div className="task-group">
          <input
            type="checkbox"
            id={item.id}
            className="checkbox"
            onChange={handlerCheck}
            checked={isChecked}
          />
          <label htmlFor="item.id">{textTitle}</label>
        </div>
        {deleteItem}
      </ItemWrapper>
    </List.Item>
  );
};

const ListCompnent = ({ list }: ListProps) => {
  return (
    <ListWrapper>
      <List
        size="large"
        dataSource={list}
        renderItem={(item: Activity) => <Item item={item} />}
      />
    </ListWrapper>
  );
};

export default ListCompnent;
