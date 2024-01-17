import React from "react";
import { Table } from "antd";
import type { TableProps } from 'antd';
import {
EditFilled,
DeleteFilled
} from '@ant-design/icons';
const List = ({
  itemLists,
  handleDeleteTask,
  handleUpdateTask,
}: any) => {
  interface DataType {
    given_name: string;
    surname: string;
    email: number;
    phone: string;

  }
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'GIVEN NAME',
      dataIndex: 'given_name',
      key: 'given_name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'SURNAME',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'PHONE',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'ACTIONS',
      render: (text) => {
        return (
          <div style={{ display: 'block' }} >
            <EditFilled style={{ display: 'inline', marginRight: '8px' }} onClick={() => handleUpdateTask(text)}/>
        
            <DeleteFilled style={{ display: 'inline' }} onClick={() => handleDeleteTask(text.id)}/>
          </div>
        )
      }
    },
  ];


  return (
    <div style={{ margin: 'auto', overflow: 'hidden'}} >
      <Table scroll={{ x: 'auto' }} columns={columns} dataSource={itemLists.data} />

    </div>
  );
};

export default List;
