import React, { useEffect } from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { useDispatch } from "react-redux";
import taskSlice from "../shared/slices/task-slice";

const ReferralForm = ({editTask, taskForm}: any) => {
  const dispatch = useDispatch();
  const { addReferral, editReferral } = taskSlice.actions;

  const onSaveReferralTask = (values: string) => {
    dispatch(addReferral(values));
  };
  const onEditReferral = (values: any) => {
    const info = {
      id: editTask.id,
      ...values
    };
    dispatch(editReferral(info));
  };

  useEffect(() => {
    taskForm.setFieldsValue({ ...editTask });
  }, [editTask]);
  return (
    <Form   
      initialValues={{ ...editTask }} 
       form={taskForm} 
       labelCol={{ span: 8 }} 

       layout={'vertical'} 
       onFinish={editTask?.id ? onEditReferral : onSaveReferralTask}
       >
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label='GIVEN NAME' name='given_name'>
          <Input size='large' />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label='SURNAME' name='surname'>
          <Input size='large' />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label='Email' name='email'>
          <Input size='large' />
        </Form.Item>
      </Col>
      <Col style={{ width: '100%' }} span={12}>
        <Form.Item style={{ width: '100%' }} label='Phone' name='phone'>
          <Input size='large' />
        </Form.Item>
      </Col>
    </Row>

    <h3
      className='text-lg font-bold text-grey-300	capitalize'
      style={{ color: '#aeaeae' }}
    >
      ADDRESS
    </h3>
    <div className='border-b border-gray-300 w-full mb-4'></div>

    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label='HOME NAME OR #' name='home_name'>
          <Input size='large' />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label='STREET' name='street'>
          <Input size='large' />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item label='SUBURB' name='suburb'>
          <Input size='large' />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label='STATE' name='state'>
          <Input size='large' />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          label='POSTCODE'
          name='postcode'

        >
          <Input size='large' />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label='COUNTRY'
          name='country'

        >
          <Input size='large' />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={12}>
        <Button className='w-full' size='large'>
          UPLOAD AVATAR
        </Button>
      </Col>
      <Col span={12}>
        <Button
          htmlType='submit'
          className='w-full text-green-700'
          size='large'
          style={{ backgroundColor: '#66dc7d', color: 'white' }}
        >
          CREATE REFERRAL
        </Button>
      </Col>
    </Row>
  </Form>
  );
};

export default ReferralForm;
