import { auth } from "@/auth";
import React from "react";

const SettingPage = () => {
  const session = auth();
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingPage;
