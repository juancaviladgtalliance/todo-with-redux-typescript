import React from "react";
import { AddNewActivity, Layout, RowListTask } from "../components";

function CurrentActivity() {
  return (
    <Layout>
      <AddNewActivity />
      <RowListTask status="active" />
    </Layout>
  );
}

export default CurrentActivity;
