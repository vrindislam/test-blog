import { useParams } from 'react-router-dom'
import { Layout, Button, Modal } from 'antd';
import Ajax from '../../services/Ajax'
import { useEffect, useState } from 'react';
import CommentContainer from '../../components/CommentContainer'
import { Link } from 'react-router-dom'
import { EditOutlined } from '@ant-design/icons';
import './style.less'
import UpdatePostForm from '../../components/UpdatePostForm';

const { get } = Ajax
const { Header, Footer, Content } = Layout;

const PostPage = () => {
   const { id } = useParams()
   const [isModal, setIsModal] = useState(false)
   const [post, setPost] = useState({})
   useEffect(() => {
      get(`/posts/${id}?_embed=comments`).then(r => setPost(r))
   }, [])

   const toogleModal = () => {
      setIsModal(!isModal)
   }

   return (
      <Layout>
         <Header>
            <Link to='/'>
               <p>Blog</p>
            </Link>
         </Header>
         <Content className='detailed-post'>
            <div >
               <div className='image-container'><img className='post-img' alt='detailed-blog' src='https://www.thewowstyle.com/wp-content/uploads/2015/02/Beautiful-Wallpapers-14.jpg' /></div>
               <div className='text-container'>
                  <h1>{post.title}</h1>
               </div>
               <div className='text-container'>
                  <p>{post.body}</p>
                  <Button
                     style={{marginLeft: '15px'}}
                     onClick={toogleModal}
                     type="primary"
                     shape="circle"
                     icon={<EditOutlined />}
                  />
               </div>
            </div>
            <Modal
               title="Update your post"
               visible={isModal}
               onCancel={toogleModal}
               footer={false}>
               <UpdatePostForm toogleModal={toogleModal} post={post} />
            </Modal>
         </Content>
         <Footer className='detailed-post'>
            <CommentContainer post={post.comments} />
         </Footer>

      </Layout>
   )
}

export default PostPage;