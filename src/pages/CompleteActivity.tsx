import React from "react";
import { Layout, RowListTask } from "../components";

const CompleteActivity = () => {
  return (
    <Layout>
      <RowListTask status="Completed" />
    </Layout>
  );
};

export default CompleteActivity;
