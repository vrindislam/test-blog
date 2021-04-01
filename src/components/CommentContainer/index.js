import { Comment, Avatar } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import Editor from './CommentEditor'
import CommentList from './CommentList'


const CommentContainer = () => {
  const [comment, setComment] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [value, setValue] = useState('')


  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true)

    setTimeout(() => {

      setSubmitting(false)
      setValue('')
      setComment([
        ...comment,
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ])

    }, 1000);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      {comment.length > 0 && <CommentList comment={comment} />}
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );

}

export default CommentContainer;