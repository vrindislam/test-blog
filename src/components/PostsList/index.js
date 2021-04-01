import { useSelector } from "react-redux"
import Post from '../Post'
import { Row, Col } from 'antd'

const style = { padding: '8px 0' };

const PostsList = () => {

   const posts = useSelector(state => state.posts)
   const mappedPosts = posts.map(post => (
      <Col style={style} className="gutter-row" span={6} key={post.id}>
         <Post
            body={post.body}
            title={post.title}
            id={post.id}
         />
      </Col>

   ))
   return (
      <div>
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {mappedPosts}
         </Row>
      </div>
   )
}

export default PostsList;