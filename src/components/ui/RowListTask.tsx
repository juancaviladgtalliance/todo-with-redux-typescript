import React, { useEffect, useState } from "react";
import { Activity, StatusProps } from "../../model";
import { useAppSelector, selectActivity } from "../../app/index";
import styled from "styled-components";

import DeleteAll from "./DeleteAll";
import ListCompnent from "./ListCompnent";

const ListWrapper = styled.div``;
const RowListTask = ({ status }: StatusProps) => {
  const { activities } = useAppSelector(selectActivity).activities;
  const [list, setList] = useState<Activity[] | []>([]);

  useEffect(() => {
    switch (status) {
      case "Completed":
        const completeList: Activity[] = activities.filter(
          (task: Activity) => task.status == "completed"
        );
        setList(completeList);
        break;
      case "active":
        const activeList: Activity[] = activities.filter(
          (task: Activity) => task.status == "active"
        );
        setList(activeList);
        break;
      default:
        const allList: Activity[] = activities.filter(
          (task: Activity) => task.status != "deleted"
        );
        setList(allList);
        break;
    }
  }, [activities]);

  console.log(list);
  const allDeleteButton = status == "Completed" ? <DeleteAll /> : null;
  return (
    <ListWrapper>
      <ListCompnent list={list} /> {allDeleteButton}
    </ListWrapper>
  );
};

export default RowListTask;
