import { lazy } from "react";

export const LazyMain = lazy(
  () => import(/*  webpackChunkName: "home" */ "./MainRouter")
);

export const LazyNotice = lazy(
  () => import(/*  webpackChunkName: "notice" */ "./NoticeRouter")
);

export const LazyCircles = lazy(
  () => import(/*  webpackChunkName: "circles" */ "./CirclesRouter")
);

export const LazyOuting = lazy(
  () => import(/*  webpackChunkName: "outing" */ "./OutingRouter")
);

export const LazyManagement = lazy(
  () => import(/*  webpackChunkName: "management" */ "./ManagementRouter")
);
