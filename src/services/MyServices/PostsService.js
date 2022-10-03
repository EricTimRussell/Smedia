import { AppState } from "../../AppState"
import { AdTime } from "../../models/AdTime";
import { Post } from "../../models/Post"
import { apiSandbox } from "../AxiosService"

class PostService {
  async getAds() {
    const res = await apiSandbox.get('api/ads')
    console.log(res.data, "ad data");
    AppState.ads = res.data.map(a => new AdTime(a))
  }
  async searchPosts(term, page = 1) {
    const res = await apiSandbox.get('api/posts', {
      params: {
        query: term,
        page
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
    AppState.term = term
  }
  async addPost(formData) {
    const res = await apiSandbox.post('api/posts', formData)
    AppState.posts.unshift(res.data)
  }

  async getPosts() {
    const res = await apiSandbox.get('api/posts')
    console.log('post data', res.data);
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  async getPostsById(id) {
    const res = await apiSandbox.get(`api/profiles/${id}/posts`)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
  async deletePost(id) {
    const res = await apiSandbox.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }
  async getProfileById(id) {
    AppState.activeProfile = {}
    const res = await apiSandbox.get(`/api/profiles/${id}`)
    console.log(res.data, "profile Data");
    AppState.activeProfile = res.data
  }
  async changePage(pageUrl) {
    const res = await apiSandbox.get(pageUrl)
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }

  async addLike(id) {
    const res = await apiSandbox.post(`/api/posts/${id}/like`)
    let postIndex = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(postIndex, 1, new Post(res.data))
    AppState.posts = AppState.posts
  }
}


export const postService = new PostService