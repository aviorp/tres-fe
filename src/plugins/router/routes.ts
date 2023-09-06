const routes = [
  {
    path: '/',
    name: "MainLayout",
    component: () => import("../../layouts/MainLayout.vue"),
    children: [
      {
        path: '/',
        name: 'Transactions',
        component: () => import("../../pages/Transactions/Transactions.vue"),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import("../../pages/About.vue"),
        meta: {
          title: 'About'
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import("../../pages/Dashboard.vue"),
        meta: {
          title: 'Dashboard'
        },
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import("../../pages/Profile.vue"),
        meta: {
          title: 'Profile'
        },
      },
      {
        path: '/transaction/:id',
        name: 'Transaction',
        component: () => import("../../pages/Transaction.vue"),
        meta: {
          title: 'Transaction'
        },
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../../pages/Login.vue"),
    meta: {
      title: 'Login'
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import("../../pages/Signup.vue"),
    meta: {
      title: 'Login'
    },
  }

]

export default routes;