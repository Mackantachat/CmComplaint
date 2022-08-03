import {
  createRouter,
  createWebHistory
} from 'vue-router'
// import Layout Frontend
import FrontendLayout from '@/layouts/Frontend.vue'
// import views Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

// import BackEnd
import Dashboard from '@/views/backend/Dashboard.vue'
import BackendLayout from '@/layouts/Backend.vue'
import Product from '@/views/backend/Product.vue'

// ตัวแปรสำหรับทดสอบกำหนดสถานะการ Login 
const state = true

//สร้างฟังก์ชันสำหรับการ route Guard
function authGuard(to, from, next) {
  // let isAuthenticateed = false

  if (state) {
    // isAuthenticateed = true
    next()
  } else {
    // isAuthenticateed = false
    next({
      name: 'Login'
    })
  }
}
const routes = [{
    path: '/',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Home',
      component: Home
    }],
    meta: {
      title: 'หน้าหลัก'
    }
  },
  {
    path: '/about',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'About',
      component: About
    }],
    meta: {
      title: 'เกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Portfolio',
      component: Portfolio
    }],
    meta: {
      title: 'ผลงานของเรา'
    }
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Service',
      component: Service
    }],
    meta: {
      title: 'บริการ'
    }
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Contact',
      component: Contact
    }],
    meta: {
      title: 'ติดต่อเรา'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Register',
      component: Register
    }],
    meta: {
      title: 'ลงทะเบียน'
    }
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Login',
      component: Login
    }],
    meta: {
      title: 'เข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotPassword',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'ForgotPassword',
      component: ForgotPassword
    }],
    meta: {
      title: 'ลืมรหัสผ่าน'
    }
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้'
    }
  },

  // BackEnd Ruoting
  {
    path: '/Backend',
    component: BackendLayout,
    children: [{
      path: '',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: authGuard
    }],
    meta: {
      title: 'Dashboard'
    },

  },
  {
    path: '/Backend',
    component: BackendLayout,
    children: [{
      path: 'products',
      name: 'products',
      component: Product,
      beforeEnter: authGuard
    }],
    meta: {
      title: 'Product'
    },

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
