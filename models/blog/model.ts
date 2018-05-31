import { Model, model } from 'mongoose'
import BlogSchema from './schema'
import BlogDocument from './document'

const BlogModel: Model<BlogDocument> = model('Blog', BlogSchema)

export default BlogModel