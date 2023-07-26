import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // view pages
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: () => import('../views/shopping-cart.vue')
    },
    // login and register pages
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/register1',
      name: 'register1',
      component: () => import('../views/login/register1.vue')
    },
    {
      path: '/register2',
      name: 'register2',
      component: () => import('../views/login/register2.vue')
    },
    // category books pages
    {
      path: '/horrorBooks',
      name: 'horrorBooks',
      component: () => import('../views/by category/horror-books.vue')
    },
    {
      path: '/historyBooks',
      name: 'historyBooks',
      component: () => import('../views/by category/history-books.vue')
    },
    {
      path: '/novelBooks',
      name: 'novelBooks',
      component: () => import('../views/by category/novel-books.vue')
    },
    {
      path: '/scientificBooks',
      name: 'scientificBooks',
      component: () => import('../views/by category/scientific-books.vue')
    },
    // writer books pages
    {
      path: '/Hermann Hesse',
      name: 'hermannHesseBooks',
      component: () => import('../views/by writer/hermann-hesse-books.vue')
    },
    {
      path: '/Albert Camus',
      name: 'albertCamusBooks',
      component: () => import('../views/by writer/albert-camus-books.vue')
    },
    {
      path: '/Robert Greene',
      name: 'robertGreeneBooks',
      component: () => import('../views/by writer/robert-greene-books.vue')
    },
    // book card page
    {
      path: '/home/:bookName',
      name: 'bookCard',
      component: () => import('../views/book-card.vue')
    },
  ]
})

// route guards
let tokenPage = ['profile', 'shoppingCart']
let withoutTokenPage = ['login','register1','register2']

router.beforeEach(async (to, from) => {
  if (!localStorage.getItem("accessToken") && tokenPage.includes(to.name)) {
    router.push({ name: 'login' })
  } else if (localStorage.getItem("accessToken") && withoutTokenPage.includes(to.name)) {
    router.push({ name: 'profile' })
  }
})
router.afterEach((to, from) => {
  document.title = to.name;
});

export default router