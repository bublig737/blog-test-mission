
interface CommentInterface {

  author?: string //id

  articleId?: string //id

  text?: string

  parentId?: string //id

  created?: Date

  status?: Status

}

export default CommentInterface

type Status = 'active' | 'deactive' 
