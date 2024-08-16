import React from "react";
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
  tabs: {
    initialRouteName: "index",
  },
};

const _layout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
