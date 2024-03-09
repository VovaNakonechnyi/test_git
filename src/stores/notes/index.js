import { defineStore } from 'pinia'

import { v4 as uuidv4 } from 'uuid'

import { dateToMiliseconds } from '@/helpers/date'

import {
  ALL_CATEGORY,
  DEFAULT_CATEGORY,
  HOME_CATEGORY,
  STUDY_CATEGORY,
  WORK_CATEGORY
} from '@/constants'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [
      {
        title: 'Cook prep meals for a week',
        body: 'I would like to cook chicken, pasta and lasagna ',
        category: {
          title: 'Home',
          value: 'home',
          id: 2
        },
        createdDate: dateToMiliseconds(1560730203),
        editDate: null,
        id: uuidv4(),
        favourite: false
      },
      {
        title: 'Im looking for a new job',
        body: 'Im looking for a new job, cause this too hard for me',
        category: {
          title: 'Work',
          value: 'work',
          id: 3
        },
        createdDate: dateToMiliseconds(1679447403),
        editDate: null,
        id: uuidv4(),
        favourite: false
      },
      {
        title: 'All about studying',
        body: 'This note about studying',
        category: {
          title: 'Study',
          value: 'study',
          id: 1
        },
        createdDate: dateToMiliseconds(1707138450),
        editDate: null,
        id: uuidv4(),
        favourite: false
      },
      {
        title: 'Brush dog teeth',
        body: 'Today im going to brush dog teeth',
        category: {
          title: 'Home',
          value: 'home',
          id: 2
        },
        createdDate: dateToMiliseconds(1646788203),
        editDate: null,
        id: uuidv4(),
        favourite: false
      },
      {
        title: 'I have to finish a task',
        body: 'Ive to finish a task today, because its high time to do this',
        category: {
          title: 'Work',
          value: 'work',
          id: 3
        },
        createdDate: dateToMiliseconds(1657930203),
        editDate: null,
        id: uuidv4(),
        favourite: false
      },
      {
        title: 'Study JavaScript',
        body: 'I wanna learn JS',
        category: {
          title: 'Study',
          value: 'study',
          id: 1
        },
        createdDate: dateToMiliseconds(1613869803),
        id: uuidv4(),
        favourite: false
      }
    ],
    categories: [ALL_CATEGORY, HOME_CATEGORY, STUDY_CATEGORY, WORK_CATEGORY],

    filter: {
      filteredByCategory: DEFAULT_CATEGORY,
      filteredByFavourite: false
    },
    sort: {
      sortByTitle: false,
      sortByCreatedTime: false
    }
  }),
  getters: {
    filteredNotes({ notes: storeNotes, filter }) {
      let notes = [...storeNotes]
      if (filter.filteredByCategory !== DEFAULT_CATEGORY)
        notes = notes.filter((note) => note.category.value === filter.filteredByCategory)

      if (filter.filteredByFavourite) notes = notes.filter((note) => note.favourite)

      return notes || []
    },
    sortedAndFilteredNotes({ sort }) {
      let notes = [...this.filteredNotes]

      if (sort.sortByTitle)
        notes = notes.sort((a, b) => {
          if (a.title < b.title) return -1

          if (a.title > b.title) return 1

          return 0
        })

      if (sort.sortByCreatedTime) notes = notes.sort((a, b) => b.createdDate - a.createdDate)

      return notes || []
    },
    generalNotes() {
      return this.sortedAndFilteredNotes || []
    }
  },
  actions: {
    setNote(note = {}) {
      this.notes.push(note)
    },
    getNote(id = '') {
      return this.notes.find((note) => note.id === id)
    }
  },
  persist: true
})
