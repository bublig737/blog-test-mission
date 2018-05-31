import { Document } from 'mongoose'

interface UserDocument extends Document { 

  username: string

  password: string

}

export default UserDocument