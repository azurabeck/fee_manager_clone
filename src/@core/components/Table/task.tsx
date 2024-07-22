export interface IStatusTableProps {
  task: number;
}

export const TaskTable = (props: IStatusTableProps) => {
  const { task } = props;
  switch (task) {
    case 1:
      return (
        <div>
          WireTransfer
        </div>
      );
      break;
    case 2:
      return (
        <div>
         FeeManagement
        </div>
      );
      break;
    default:
      return (
        <div>
         FeeManagement
        </div>
      );
      break;
  }
};
