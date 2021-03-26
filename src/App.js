import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { AuthContext } from './context/AuthProvider';
import Layout from './container/Layout/Layout';
import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  FORGET_PASSWORD_PAGE,
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  EXHBN_DETAIL_PAGE,
  HALL_DETAIL_PAGE,
  ADD_HOTEL_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  ADD_EXHBN_PAGE,
} from './settings/constant';

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Home" */ './container/Home/Home'),
      loading: Loading,
      modules: ['Home'],
    }),
    exact: true,
  },
  {
    path: LOGIN_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SignIn" */ './container/Auth/SignIn/SignIn'
        ),
      loading: Loading,
      modules: ['SignIn'],
    }),
  },
  {
    path: REGISTRATION_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SignUp" */ './container/Auth/SignUp/SignUp'
        ),
      loading: Loading,
      modules: ['SignUp'],
    }),
  },
  {
    path: FORGET_PASSWORD_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ './container/Auth/ForgetPassword'
        ),
      loading: Loading,
      modules: ['ForgetPassword'],
    }),
  },
  {
    path: `${EXHBN_DETAIL_PAGE}/:exhbnNum`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ExbhnDetail" */ './container/SinglePage/ExbhnDetail'),
      loading: Loading,
      modules: ['ExbhnDetail'],
    }),
  },
  {
    path: LISTING_POSTS_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Listing" */ './container/Listing/Listing'),
      loading: Loading,
      modules: ['Listing'],
    }),
  },
  {
    path: AGENT_PROFILE_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "AgentDetailsViewPage" */ './container/Agent/AccountDetails/AgentDetailsViewPage'
        ),
      loading: Loading,
      modules: ['AgentDetailsViewPage'],
    }),
  },
  {
    path: HALL_DETAIL_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "HallDetail" */ './container/HallPage/HallDetail'),
      loading: Loading,
      modules: ['HallDetail'],
    }),
  },
  {
    path: PRIVACY_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "privacy" */ './container/Privacy/Privacy'),
      loading: Loading,
      modules: ['Privacy'],
    }),
  },
  {
    path: PRICING_PLAN_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Pricing" */ './container/Pricing/Pricing'),
      loading: Loading,
      modules: ['Pricing'],
    }),
  },
  {
    path: ADD_HOTEL_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "AddExhbn" */ './container/AddListing/AddExhbn'
        ),
      loading: Loading,
      modules: ['AddExhbn'],
    }),
  },
];

/**
 *
 * Protected Route Component
 *
 */
const AddListing = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "AddListing" */ './container/AddListing/AddListing'
    ),
  loading: Loading,
  modules: ['AddListing'],
});

const AgentAccountSettingsPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "AgentAccountSettingsPage" */ './container/Agent/AccountSettings/AgentAccountSettingsPage'
    ),
  loading: Loading,
  modules: ['AgentAccountSettingsPage'],
});

/**
 *
 * Not Found Route Component
 *
 */

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ './container/404/404'),
  loading: Loading,
  modules: ['NotFound'],
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
      }
      {...rest}
    />
  );
};

/**
 *
 * Overall Router Component
 *
 */

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <ProtectedRoute path={ADD_HOTEL_PAGE} component={ADD_HOTEL_PAGE} />
        <ProtectedRoute
          path={AGENT_ACCOUNT_SETTINGS_PAGE}
          component={AgentAccountSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
