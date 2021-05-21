import React from "react";

import { Container, Separator } from "./style";

import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome></ServerButton>
      <Separator />
      <ServerButton></ServerButton>
      <ServerButton hasNotifications></ServerButton>
      <ServerButton mentions={3}></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton hasNotifications></ServerButton>
      <ServerButton mentions={100}></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
      <ServerButton></ServerButton>
    </Container>
  );
};

export default ServerList;
