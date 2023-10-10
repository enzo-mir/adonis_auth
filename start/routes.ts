import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.post('/auth/register','AuthController.register').as('auth.register')
Route.post('/auth/login','AuthController.login').as('auth.login')
Route.get('/auth/logout','AuthController.logout').as('auth.logout')