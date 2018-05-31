import { UserModel, UserInterface } from '~/models'
import * as passport from 'passport'
import { Strategy } from 'passport-local'


export default () => {

  var LocalStrategy = Strategy

  passport.use(new LocalStrategy(

    (username, password, done) => {

      UserModel.findOne({ username: username }, (err, user) => {

        if (err) { return done(err) }

        if (!user) {

          return done(null, false, { message: 'Incorrect username' })

        }

        if (!(user.password == password)) {

          return done(null, false, { message: 'Incorrect password' })

        }

        return done(null, user)

      })
    }
  ))

  passport.deserializeUser((user: UserInterface, done) => {

    UserModel.findById({ _id: user._id })

      .then((user) => {

        if (user) { done(null, user) }

      })

      .catch((error: Error) => { done(error) })

  })

  passport.serializeUser((user: UserInterface, done) => {

    done(null, user)

  })
}