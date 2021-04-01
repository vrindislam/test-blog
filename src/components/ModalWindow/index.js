import { Modal } from 'antd';
import PostForm from '../PostForm';

const ModalWindow = ({ isModal, hideModal }) => {

   return (

      <Modal
         title="Write your post"
         visible={isModal}
         onCancel={hideModal}
         footer={false}>
         <PostForm hideModal={hideModal} />
      </Modal>

   )
}

export default ModalWindow;