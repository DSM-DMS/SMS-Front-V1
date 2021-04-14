import { lazy } from "react";

export const LazyLogin = lazy(
  () => import("../components/default/Login/Login")
);
export const LazyPasswordChange = lazy(
  () => import("../containers/PasswordChange/PasswordChangeContainer")
);
export const LazyRegister = lazy(
  () => import("../containers/Register/RegisterContainer")
);
export const LazyMain = lazy(() => import("./MainRouter"));
export const LazyNotice = lazy(() => import("./NoticeRouter"));
export const LazyCircles = lazy(() => import("./CirclesRouter"));
export const LazyOuting = lazy(() => import("./OutingRouter"));
export const LazyManagement = lazy(() => import("./ManagementRouter"));
