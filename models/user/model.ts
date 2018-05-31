import { Model, model } from 'mongoose'
import UserSchema from './schema'
import UserDocument from './document'

const UserModel: Model<UserDocument> = model('User', UserSchema)

export default UserModel