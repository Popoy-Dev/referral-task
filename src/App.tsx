import React, { useState, useEffect } from 'react'
import List from './components/List'
import { useSelector, useDispatch } from 'react-redux'
import taskSlice from './shared/slices/task-slice'
import { message as AntDMessage, Form, Row, Spin } from 'antd'
import ReferralForm from './components/TaskForm'

const App = () => {
  const dispatch = useDispatch()
  const { getReferralData, deleteReferral } = taskSlice.actions
  const { data } = useSelector((state: any) => state?.task)
  const { status: taskStatus } = useSelector((state: any) => state?.task)
  const [taskForm] = Form.useForm()
  const [itemLists, setItemLists] = useState<any>([])
  const [editTask, setEditTask] = useState({})

  const handleDeleteTask = (record: any) => {
    dispatch(deleteReferral(record))
  }
  useEffect(() => {
    dispatch(getReferralData())
  }, [])

  useEffect(() => {
    if (data) {
      setItemLists(data)
    }
  }, [data])
  const handleUpdateTask = (list: any) => {
    setEditTask(list)
  }

  const onStatusChange = () => {
    if (taskStatus?.submitted && !taskStatus?.loading) {
      switch (taskStatus?.type) {
        case 'addReferral':
          if (taskStatus?.success) {
            dispatch(getReferralData())
            AntDMessage.success('Successfully add the new referral task')
            taskForm.resetFields()
          } else {
            AntDMessage.error('Something wrong while adding new referral task')
          }
          break
        case 'editReferral':
          if (taskStatus?.success) {
            dispatch(getReferralData())
            AntDMessage.success('Successfully edit the referral task')
            taskForm.resetFields()
            setEditTask({})
          } else {
            AntDMessage.error('Something wrong while adding new referral task')
          }
          break

        case 'deleteReferral':
          if (taskStatus?.success) {
            dispatch(getReferralData())
            AntDMessage.success('Successfully delete the referral task')
          } else {
            AntDMessage.error('Something wrong while deleting a referral task')
          }
      }
    }
  }
  useEffect(() => {
    onStatusChange()
  }, [taskStatus])

  return (
    <>
      <div className='lg:flex justify-between'>
        <div className='w-full lg:w-1/2 p-6 lg:p-12'>
          <h1 className='text-2xl text-black	font-bold'>Referral Builder</h1>

          <h3
            className='text-lg font-bold text-grey-300	capitalize'
            style={{ color: '#aeaeae' }}
          >
            Personal details
          </h3>
          <div className='border-b border-gray-300 w-full mb-4'></div>

          <ReferralForm editTask={editTask} taskForm={taskForm} />
        </div>

        <div
          className='w-full lg:w-1/2 lg:m-auto px-4 pt-20 pb-4'
          style={{ backgroundColor: '#f5f5f5' }}
        >
          {itemLists?.data?.length ? (
            <Row gutter={16}>
              <List
                itemLists={itemLists}
                handleDeleteTask={handleDeleteTask}
                handleUpdateTask={handleUpdateTask}
              />
            </Row>
          ) : (
            <div className='text-center'>
              <Spin spinning={taskStatus?.loading} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
