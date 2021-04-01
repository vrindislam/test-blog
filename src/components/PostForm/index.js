import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/posts/postsActions'
import { v4 as uuidv4 } from 'uuid';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


const PostForm = ({hideModal}) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    values['id'] = uuidv4()
    dispatch(createPost(values))
    hideModal()
  }
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['body']} label="Text">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PostForm;