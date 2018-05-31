import { Document } from 'mongoose'

interface CommentDocument extends Document { 

  author: string //id

  articleId?: string //id

  text: string

  parentId?: string //id

  created?: Date

  status?: Status

}

export default CommentDocument

type Status = 'active' | 'deactive' 
