const { Strategy, ExtractJwt } = require('passport-jwt')
const salt = 'thisismysercretstringthelongerthebetter'
const models = require('./models')
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: salt
}

module.exports = (passport) => {
  passport.use(
    new Strategy(options, (payload, done)=> {
      models.User.findOne({ where: {email: payload.email}})
      .then(user => {
        //success, user is found
        return done(null, {
          id: user.id,
          email: user.email
        })
      })
      .catch(()=>{
        // failure, user is NOT found
        console.error(error)
        return done(null, false)
      })
    })
  )
}