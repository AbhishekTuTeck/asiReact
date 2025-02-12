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
import CheckList from '../pages/CompileSchedule/CheckList';
import BalanceSheet from '../pages/CompileSchedule/BalanceSheet';
import BlockEBlock2 from '../pages/CompileSchedule/BlockEBlock2';
import BlockI from '../pages/CompileSchedule/BlockI';
import BlockH from '../pages/CompileSchedule/BlockH';
import BlockJ from '../pages/CompileSchedule/BlockJ';
import Blockk from '../pages/CompileSchedule/Blockk';
import BlockE from '../pages/CompileSchedule/BlockE';
import BlockFBlockG from '../pages/CompileSchedule/BlockFBlockG';
import PartA1 from '../pages/CompileSchedule/PartA1';
import PartA2 from '../pages/CompileSchedule/PartA2';
import Block2LabourBureau from '../pages/CompileSchedule/Block2LabourBureau';

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
        {
          path: 'compile-schedule/balance-sheet',
          element: <BalanceSheet/>,
        }, 
        {
          path: 'compile-schedule/block-e',
          element: <BlockE/>,
        },
        {
          path: 'compile-schedule/block-e-block2',
          element: <BlockEBlock2/>,
        },
        {
          path: 'compile-schedule/block-h',
          element: <BlockH/>,
        },
        {
          path: 'compile-schedule/block-i',
          element: <BlockI/>,
        },
        {
          path: 'compile-schedule/block-j',
          element: <BlockJ/>,
        },
        {
          path: 'compile-schedule/block-k',
          element: <Blockk/>,
        },
        {
          path: 'compile-schedule/block-F-Block-G',
          element: <BlockFBlockG/>,
        },
        {
          path: 'compile-schedule/part-a-1',
          element: <PartA1/>,
        },
        {
          path: 'compile-schedule/part-a-2',
          element: <PartA2/>,
        },
        {
          path: 'compile-schedule/block-2-labour-bureau',
          element: <Block2LabourBureau/>,
        },
        {
          path: 'compile-schedule/check-list',
          element: <CheckList/>,
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
