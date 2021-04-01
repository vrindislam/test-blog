import { Comment, List } from 'antd';

const CommentList = ({ comment }) => (
  <List
    dataSource={comment}
    header={`${comment.length} ${comment.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

export default CommentList;