import React, { useState } from "react";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import renewIcon from '@/assets/svg/renew.svg';
import { Text, ContainerWrapper, Button } from "./styles";
import { DashboardProvider } from "@/services/dashboardProvider";
import { useAuthStore } from "@/@core/store";

interface ITitleTable {
  label: string;
  queryParams?: string;
}

const TitleTable = ({ label, queryParams }: ITitleTable) => {

  const [isRotating, setIsRotating] = useState(false);
  const { getGroupTaskByUser, getAllRequestTab  } = DashboardProvider();
  const { userData } = useAuthStore((state) => state);

  const handleClick = () => {
    setIsRotating(true);
    switch (label) {
      case "My Pending Approvals":
        getGroupTaskByUser(queryParams!).finally(() => setIsRotating(false));
        break;
      case "All Requests":
        getAllRequestTab().finally(() => setIsRotating(false));;
        break;
      default:
        break;
    }
  };
  return (
    <ContainerWrapper>
      <Text>{label}</Text>
      <Button rotate={isRotating} onClick={handleClick} disabled={isRotating}>
        <Tooltip
          arrow
          title="Refresh"
          placement="top">
          <Image src={renewIcon} width={24} height={24} alt="Refresh" />
        </Tooltip>
      </Button>
    </ContainerWrapper>
  )
};

export default TitleTable;
