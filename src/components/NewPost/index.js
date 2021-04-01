import { Button } from 'antd';
const NewPost = ({ showModal }) => {

   return (
      <Button onClick={showModal} type="primary" ghost>
         New post
      </Button>
   )
}
export default NewPost;