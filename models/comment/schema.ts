import { Schema } from 'mongoose'

const schema = new Schema({

  author: { type: String, required: true },

  articleId: { type: String },

  text: { type: String, required: true },

  parentId: { type: String, default: 'null' },

  created: {type: Date},

  status: { type: String, default: 'active' }

})

export default schema