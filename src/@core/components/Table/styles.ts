import { Table } from "antd";
import styled, { css } from "styled-components";

interface ITable {
  completed?: boolean;
}

export const TableWrapper = styled(Table)`
  .ant-table-thead > tr > th {
    background: #fff;
  }
  .ant-table-content {
    overflow: hidden !important;
  }
  .ant-table-cell::before {
    display:none;
  }
  .ant-table-cell-ellipsis {
    padding: 12px 8px !important;
    cursor: pointer !important;
  }
  .ant-table-cell-ellipsis:active {
    background-color:#d6d6d6
  }
  .ant-table-cell-ellipsis::before {
    display: none;
  }
  .ant-table-cell-fix-left:not(th) {
    text-transform: uppercase !important;
  }
  .ant-table-body {
    overflow-y: hidden !important;
    cursor: pointer;
  }

  .ant-table-tbody > tr > td > a:hover {
    all:unset!important;
  }

  .ant-table-body:hover {
    overflow-y: scroll !important;
  }
  .ant-table-fixed-header .ant-table-scroll .ant-table-header {
    overflow: hidden !important;
  }
`;
export const ContainerWrapper = styled.div<ITable>`
  width: 114px;
  height: 33px;
  background: #f9ede6;
  align-items: center;
  /* justify-content: space-around; */
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  ${(props) =>
    props.completed &&
    css`
    background: #e6f2ee;
  `}
`;

export const IconWrapper = styled.div`
display: flex;
align-items: center;
padding: 0px 4px 0px 10px;
`;

export const TextStatus = styled.span<ITable>`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.completed ? "#008056" : "#aa4500")};
`;