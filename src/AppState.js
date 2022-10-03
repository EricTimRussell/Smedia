import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Post.js').Post} */
  posts: {},
  /** @type {import('./models/Profile').Profile} */
  profiles: {},
  nextPage: null,
  previousPage: null,
  likes: [],
  /** @type {import('./models/AdTime.js').AdTime[]} */
  ads: [],
  activeProfile: {},
  term: '',
  page: 0
})
