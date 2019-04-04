
import React from "react";
import { SafeAreaView } from "react-native";
import withTheme from "../components/HOC/withTheme";

const Container = ({ style, children, theme }) => (
  <SafeAreaView style={[style, { backgroundColor: theme.background }]}>{children}</SafeAreaView>
);

export default withTheme(Container);