import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const redirect = () => {
  return <Redirect href="/explore" />;
};

export default redirect;
