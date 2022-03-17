const { Router }        = require('express')
const router            = Router()
const { ifUserLogged }  = require('../middleware/authMiddleware')
const authController    = require('../controllers/authController')
const bookingController = require('../controllers/bookingController')

router.get('/',                 bookingController.home)

//* AUTH
router.get('/userdata',         authController.userdata)
router.get('/logout',           authController.logout)
router.post('/login',           authController.login)
router.post('/signup',          authController.signup)

//* BOOK 
router.get('/booking',          ifUserLogged, bookingController.getbooks)
router.post('/booking',         ifUserLogged, bookingController.setBooks)
router.put('/booking/:id',      ifUserLogged, bookingController.updateBook)
router.delete('/booking/:id',   ifUserLogged, bookingController.deleteBook)


module.exports = router
