import styled, { css } from "styled-components";

interface ITimelineParamns {}

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;
export const Title = styled.span`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12px;
  color: #1e2347;
`;
export const Text = styled.a`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12px;
  color: #484a55;
`;
export const StepList = styled.div`
  display: flex;
  position: relative;
`;
export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 0px 5px;
  gap: 8px;
  z-index: 1;
`;
export const Divider = styled.div`
  top: 27%;
  left: 50%;
  width: 75%;
  position: absolute;
  border-bottom: 1px solid #dbdbdb;
  transform: translateY(-50%) translateX(-50%);
`;
