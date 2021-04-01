import { Route, Switch } from 'react-router-dom';
import PostListPage from '../pages/PostListPage'
import PostPage from '../pages/PostPage'
import ErrorPageBoundary from '../pages/ErrorBoundaryPage'

const MainRoutes = () => {
   return (
      <Switch>
         <Route exact path={'/'} component={PostListPage} />
         <Route exact path={'/post/:id'} component={PostPage} />
         <Route exact path={'/error'} component={ErrorPageBoundary} />
         <Route exact path="*" render={() => <h1>You are on the wrong page</h1>} />
      </Switch>
   )
}

export default MainRoutes;