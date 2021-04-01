import NewPost from '../../components/NewPost';
import ModalWindow from '../../components/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, hideModal } from '../../store/modal/modalActions';
import PostsList from '../../components/PostsList';


const PostListPage = () => {
   const isModal = useSelector(state => state.modal.isModal)
   const dispatch = useDispatch();

   return (
      <div>
         <NewPost className='create-post-btn' showModal={() => dispatch(showModal())} />

         {isModal &&
            <div className='list-container'>
               <ModalWindow
                  className='modal'
                  isModal={isModal}
                  hideModal={() => dispatch(hideModal())}
               />
            </div>

         }
         <PostsList />
      </div>
   )
}

export default PostListPage;