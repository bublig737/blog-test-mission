import { Document } from 'mongoose'


interface BlogDocument extends Document { 

  label?: string

  title?: string

  metaTitle?: string

  metaDescription?: string

  metaKeywords?: string

  body?: string

  author?: string

  authorName?: string

  created?: Date

  status?: string

}


export default BlogDocument