import { Schema } from 'mongoose'

const schema = new Schema({

  label: { type: String, default: 'test-article-12' },

  title: { type: String },

  metaTitle: { type: String },

  metaDescription: { type: String },

  metaKeywords: { type: String },

  body: { type: String },

  author: { type: String, ref: 'User', default: 'blog' },

  authorName: { type: String, default: 'blog' },

  created: { type: Date, default: Date.now() },

  status: { type: String, default: 'active' }

})

export default schema