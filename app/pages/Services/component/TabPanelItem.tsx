import React from 'react';
import TaskItem from './TaskItem';

function TabPanelItem({ data }:{data:any}) {
    const taskItems = data.tasks.map((task: any, index: number) => <TaskItem key={index} prop={task} />);

  return (
    <div className="tabpanel-item">
      {taskItems}
    </div>
  );
}

export default TabPanelItem;
