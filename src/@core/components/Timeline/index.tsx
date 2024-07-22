import React from "react";
import Image from "next/image";
import FlagIcon from "@/assets/svg/flag-wating-icon.svg";
import StepApproveIcon from "@/assets/svg/step-approve-icon.svg";
import StepRejectIcon from "@/assets/svg/error-circle-color-bigger.svg";
import StepStopIcon from "@/assets/svg/error-circle-gray-bigger.svg";
import ProcessingImage from "@/assets/svg/processing.svg";
import {
  Text,
  StepItem,
  TimelineWrapper,
  Title,
  StepList,
  Divider,
} from "./styles";
import { useFeeManagementStore } from "@/@core/store/feeManagementStore";
import { someRejected, someApproved, somePartial } from "@/@core/utils/some";
import filterApproverResult from "@/@core/utils/filterResult";
interface ITimeline {
  status?: boolean;
}

const Timeline = ({ status }: ITimeline) => {
  let stepNumber = 1;

  const { feeData } = useFeeManagementStore((state) => state);
  const equityTeam = feeData?.data?.equityTeam;
  const secopsTeam = feeData?.data?.secopsTeam;
  const usersApprovers = feeData?.data?.usersApprovers;

  const STATUS = feeData?.data?.status;

  const signature = feeData?.data?.signatureApprover;
  const approverType = feeData?.data?.levelApproverType;

  const statusUserApprovers =
    filterApproverResult(usersApprovers).length === 0
      ? FlagIcon
      : someRejected(usersApprovers)
      ? StepRejectIcon
      : StepApproveIcon;

  const statusEquityTeam =
    (someRejected(usersApprovers) && STATUS === "REJECTED") ||
    ((somePartial(usersApprovers) &&
      STATUS === "DONE" || STATUS === 'PENDING_SECOPS') &&
      !someApproved(equityTeam))
      ? StepStopIcon
      : someRejected(equityTeam)
      ? StepRejectIcon
      : someApproved(equityTeam)
      ? StepApproveIcon
      : FlagIcon;

  const statusSecopsTeam =
    (someRejected(usersApprovers) && STATUS === "REJECTED") ||
    (somePartial(usersApprovers) &&
      STATUS === "DONE" &&
      !someApproved(secopsTeam)) ||
    (someRejected(equityTeam) && STATUS === "REJECTED")
      ? StepStopIcon
      : someRejected(secopsTeam)
      ? StepRejectIcon
      : someApproved(secopsTeam) && STATUS === "DONE"
      ? StepApproveIcon
      : FlagIcon;

  const allApproved =
    feeData?.data?.status === "DONE" || feeData?.data?.status === "REJECTED";

  if (feeData?.data?.status !== "INITIAL") {
    return (
      <TimelineWrapper>
        <StepList>
          <StepItem>
            <Image src={StepApproveIcon} width={56} height={56} alt="info" />
            <Text>{stepNumber++}. Initiator</Text>
          </StepItem>

          {usersApprovers?.length === 0 ? null : (
            <StepItem>
              <Image
                src={statusUserApprovers}
                width={56}
                height={56}
                alt="info"
              />
              <Text>
                {stepNumber++}. {approverType} - {signature} or Higher
              </Text>
            </StepItem>
          )}
          {equityTeam?.length === 0 ? null : (
            <StepItem>
              <Image src={statusEquityTeam} width={56} height={56} alt="info" />
              <Text>{stepNumber++}. Equity and Commission Approval</Text>
            </StepItem>
          )}
          {secopsTeam?.length === 0 ? null : (
            <StepItem>
              <Image src={statusSecopsTeam} width={56} height={56} alt="info" />
              <Text>{stepNumber++}. Security Operation Updates</Text>
            </StepItem>
          )}

          <StepItem>
            <Image
              src={allApproved ? StepApproveIcon : FlagIcon}
              width={56}
              height={56}
              alt="info"
            />
            <Text>{stepNumber++}. Account Officer Notified</Text>
          </StepItem>
          <Divider />
        </StepList>
      </TimelineWrapper>
    );
  }

  return (
    <TimelineWrapper
      style={{
        flexDirection: "column",
        alignItems: "center",
        margin: "95px 0",
      }}
    >
      <Image src={ProcessingImage} width={264} alt="Procesing Request" />
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title>Your request is processing.</Title>
        <Text style={{ marginTop: "4px" }}>
          The request steps and status will be available soon
        </Text>
      </div>
    </TimelineWrapper>
  );
};

export default Timeline;
