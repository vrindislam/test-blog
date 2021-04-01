import { Space, Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deletePost } from '../../store/posts/postsActions'
import './style.less'

const Post = ({ body, title, id }) => {
   const dispatch = useDispatch()
   return (
      <Space direction="vertical">
         <Card style={{ width: 300 }}>
            <div className='img-container'>
               <img alt='post-logo' className='post-img' src={'https://www.thewowstyle.com/wp-content/uploads/2015/02/Beautiful-Wallpapers-14.jpg'} />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
            <div className='btn-container'>
               <Link to={`/post/${id}`}>
                  <Button type="primary" ghost>
                     Read more
                  </Button>
               </Link>
               <Button onClick={() => dispatch(deletePost(id))} type="danger" ghost>
                  Delete
                  </Button>
            </div>
         </Card>
      </Space>
   )
}

export default Post;