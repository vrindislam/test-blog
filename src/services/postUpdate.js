import { updatePosts } from '../store/posts/postsActions'
import Ajax from './Ajax'

const { get } = Ajax

export const postsFetching = (dispatch) => {
   async function fetch() {
      const postsApi = await get('/posts')
      dispatch(updatePosts(postsApi))
   }

   fetch();
}