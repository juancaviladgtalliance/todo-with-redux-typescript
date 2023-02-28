import React from "react";
import { AddNewActivity, Layout, RowListTask } from "../components";

const AllActivity: React.FC = () => {
  return (
    <Layout>
      <AddNewActivity />
      <RowListTask status="all" />
    </Layout>
  );
};

export default AllActivity;
