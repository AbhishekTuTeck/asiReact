import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoadingComponent from '../components/loading-component/LoadingComponent';
import PageNotFound from '../components/page-not-found/PageNotFound';
import LoginForm from '../pages/login/Login';
import ProtectedRoutes from './private-routes';
import Test from '../pages/test/Test';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import ResetPassword from '../pages/reset-password/ResetPassword';
import CompileScheduleList from '../pages/CompileSchedule/CompileScheduleList';
import CompileScheduleGeneralInfo from '../pages/CompileSchedule/CompileScheduleGeneralInfo';
import FixedAssetsData from '../pages/CompileSchedule/FixedAssetsData';
import ProfitLossAccount from '../pages/CompileSchedule/ProfitLossAccount';

function PublicRoutes() {
  const router = createBrowserRouter([
    { path: '/', element: <LoginForm />, 
      errorElement: <PageNotFound /> },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/nsso-secured/',
      element: <ProtectedRoutes />,
      errorElement: <PageNotFound />,
      children: [
        { path: 'test', element: <Test /> },
        {
          path: 'compile-schedule',
          element: <CompileScheduleList />,
        },
        {
          path: 'compile-schedule/compile-schedule-generalinfo',
          element: <CompileScheduleGeneralInfo />,
        },
        {
          path: 'compile-schedule/fixed-assets-data',
          element: <FixedAssetsData />,
        },
        {
          path: 'compile-schedule/profit-loss-account',
          element: <ProfitLossAccount />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default PublicRoutes;
