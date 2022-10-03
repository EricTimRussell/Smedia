export class Post {
  constructor(data) {
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.imgUrl = data.imgUrl
    this.body = data.body
    this.likeIds = data.likeIds
    this.createdAt = data.createdAt
  }
}