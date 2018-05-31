
interface BlogInterface {

  label?: string

  title?: string

  metaTitle?: string

  metaDescription?: string

  metaKeywords?: string

  body?: string

  author?: string

  authorName?: string

  created?: Date

  status?: BlogStatus

}

export default BlogInterface

export type BlogStatus = 'active' | 'deactive'