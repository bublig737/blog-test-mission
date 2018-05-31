import { Schema } from 'mongoose'

const schema = new Schema({

  username: {type: String, required: true, unique: true},

  password: {type: String, required: true}

})

export default schema