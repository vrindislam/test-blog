import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { changePost } from '../../store/posts/postsActions'

const layout = {
   labelCol: { span: 8 },
   wrapperCol: { span: 16 },
};

const UpdatePostForm = ({ post, toogleModal }) => {

   const dispatch = useDispatch();

   return (
      <Form {...layout} name="nest-messages" onFinish={(values) => {
         dispatch(changePost(post.id, values))
         toogleModal()
      }}>
         <Form.Item name={['title']} label="Title" >
            <Input />
         </Form.Item>
         <Form.Item name={['body']} label="Text" >
            <Input.TextArea />
         </Form.Item>
         <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
               Update
        </Button>
         </Form.Item>
      </Form>
   )
}

export default UpdatePostForm;