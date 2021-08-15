import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
// import Loader from 'shareComponent/Loader';
import ProtectedRoutes from './Routes/ProtectedRoutes'; //Authenticated routes
import PublicRoute from './Routes/PublicRoutes';
import PrivateRoute from './Routes/PrivateRoutes';

const LoginPage = lazy(() => import('./Components/Authenticate/SignUp'));
const Register = lazy(() => import('./Components/Authenticate/Login'));
const NoFoundComponent = lazy(() => import('./Components/404NoComponent/NoComponent'));

const App = () => {
  const isAuthenticated = false;

  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
          >
            <LoginPage />
          </PublicRoute>
          <PublicRoute
            path="/register"
            isAuthenticated={isAuthenticated}
          >
            <Register />
          </PublicRoute>
          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <ProtectedRoutes />
          </PrivateRoute>
          <Route path="*">
            <NoFoundComponent />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;