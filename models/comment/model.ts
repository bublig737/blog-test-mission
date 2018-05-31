import { Model, model } from 'mongoose'
import CommentSchema from './schema'
import CommentDocument from './document'

const CommentModel: Model<CommentDocument> = model('Comment', CommentSchema)

export default CommentModel