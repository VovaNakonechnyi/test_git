import { createRouter, createWebHistory } from 'vue-router'

import { useNotesStore } from '@/stores/notes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default'
      },
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/create',
      name: 'create',
      meta: {
        layout: 'default'
      },
      component: () => import('@/views/create/IndexView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      beforeEnter: (to, from) => {
        const notesStore = useNotesStore()
        const note = notesStore.getNote(to.params.id)

        if (!note) return { path: from.path }
      },
      meta: {
        layout: 'default'
      },
      component: () => import('@/views/edit/IndexView.vue')
    }
  ]
})

export default router
