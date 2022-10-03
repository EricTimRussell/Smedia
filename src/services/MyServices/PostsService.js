import { AppState } from "../../AppState"
import { Account } from "../../models/Account";
import { Like } from "../../models/Like";
import { Post } from "../../models/Post"
import { Profile } from "../../models/Profile";
import { logger } from "../../utils/Logger";
import { apiSandbox } from "../AxiosService"

class PostService {
  async getAds() {
    const res = await apiSandbox.get('api/ads')
    AppState.ads = [res.data, ...AppState.ads]
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
    AppState.posts.push(new Post(res.data))
  }

  async getPosts() {
    const res = await apiSandbox.get('api/posts')
    console.log('post data', res.data);
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }
  async getPostsById(id) {
    const res = await apiSandbox.find(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
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
    AppState.posts.push(new Like(res.data))
  }
}


export const postService = new PostService