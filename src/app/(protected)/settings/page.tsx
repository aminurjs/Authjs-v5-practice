import { auth } from "@/auth";
import React from "react";

const SettingPage = async () => {
  const session = await auth();
  console.log(session);
  return <div>{JSON.stringify(session)}</div>;
};

export default SettingPage;
