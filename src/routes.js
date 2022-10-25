import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import LoginLayout from "src/layouts/LoginLayout";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/restaurantsection/RestoCard")
    ),
  },
  {
    exact: true,
    path: "/chai",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/restaurantsection/chaisection/ChaiSection")
    ),
  },
  {
    exact: true,
    path: "/biryani",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/restaurantsection/biryanisection/BiryaniPage")
    ),
  },
  {
    exact: true,
    path: "/cart",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/restaurantsection/cart/Cart")
    ),
  },
  {
    exact: true,
    path: "/checkout",
    layout: HomeLayout,
    component: lazy(() => import("src/component/CheckOutPage")),
  },
  {
    exact: true,
    path: "/detail_page",
    layout: HomeLayout,
    component: lazy(() => import("src/component/DetailPage")),
  },

  {
    exact: true,
    path: "/login",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/LogIn")),
  },
  {
    exact: true,
    path: "/signup",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/signup/signup")),
  },
  {
    exact: true,
    path: "/forget-password",
    // guard:true,
    component: lazy(() => import("src/views/auth/forget-password/index")),
  },
  {
    exact: true,
    path: "/check-email",
    // guard:true,
    component: lazy(() => import("src/views/auth/signup/CheckEmail")),
  },
  {
    exact: true,
    path: "/verify-otp",
    component: lazy(() => import("src/views/auth/Verify-Otp/VerifyOtp")),
  },
  {
    exact: true,
    path: "/reset-password",
    // guard:true,
    component: lazy(() => import("src/views/auth/reset-password/index")),
  },
  {
    exact: true,
    path: "/explore",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard")),
  },
  {
    exact: true,
    path: "/stories",
    guard: true,
    // layout: DashboardLayout,
    component: lazy(() => import("src/component/StoriesPages")),
  },
  {
    exact: true,
    path: "/comment",
    guard: true,
    // layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Dashboard/Comment")),
  },
  {
    exact: true,
    path: "/profile",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/Index")),
  },
  {
    exact: true,
    path: "/wallet",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Wallet/Wallet")),
  },
  {
    exact: true,
    path: "/transactionData",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/component/TransactionData")),
  },

  {
    exact: true,
    path: "/settings",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Settings/Index")),
  },
  {
    exact: true,
    path: "/admin",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Admin/Admin")),
  },
  {
    exact: true,
    path: "/dashboard",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Admin/Dashboard")),
  },
  {
    exact: true,
    path: "/control",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Control/Control")),
  },
  {
    exact: true,
    path: "/static",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/StaticContent/Static")),
  },
  {
    exact: true,
    path: "/add-static-content",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/StaticContent/AddStatic")),
  },
  {
    exact: true,
    path: "/static-content-details",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/StaticContent/StaticContentDetail")
    ),
  },
  {
    exact: true,
    path: "/edit-static-content",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/StaticContent/EditContent")),
  },

  {
    exact: true,
    path: "/notification-list",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Notification/Index")),
  },

  {
    exact: true,
    path: "/transaction-history",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/StaticPage/TransactionHistory")
    ),
  },
  {
    exact: true,
    path: "/chat-history",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/StaticPage/ChatList")),
  },

  {
    exact: true,
    path: "/notification",
    guard: true,
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/StaticPage/Notification")),
  },

  {
    exact: true,
    path: "/privacy-policy",
    // guard: true,
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/PrivacyPolicy")),
  },
  {
    exact: true,
    path: "/terms-conditions",
    // guard: true,
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/TermsAndCondition")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
