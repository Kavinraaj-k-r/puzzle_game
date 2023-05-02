const express = require('express');

const router = express.Router();

const clueController = require('../controller/clueController');
const authMiddleware = require('../controller/authMiddleware');

// router.route('/1').get(clueController.getClue1);
// router.route('/1').post(clueController.checkClue1);

// router.route('/2').get(clueController.getClue2);
// // router.route('/2').post(clueController.checkClue2);

// router.route('/3').get(clueController.getClue3);

// router.route('/4').get(clueController.getClue4);

// router.route('/5').get(clueController.getClue5);

// router.route('/6').get(clueController.getClue6);

// router.route('/7').get(clueController.getClue7);

router.route('/:clueNumber').get(authMiddleware.isAuthenticated, (req, res, next) => {

    const clueNumber = parseInt(req.params.clueNumber);

    switch(clueNumber) {
      case 1:
        clueController.getClue1(req, res, next);
        break;
      case 2:
        clueController.getClue2(req, res, next);
        break;
      case 3:
        clueController.getClue3(req, res, next);
        break;
      case 4:
        clueController.getClue4(req, res, next);
        break;
      case 5:
        clueController.getClue5(req, res, next);
        break;
      case 6:
        clueController.getClue6(req, res, next);
        break;
      case 7:
        clueController.getClue7(req, res, next);
        break;
      case 8:
        clueController.getClue8(req, res, next);
        break;
      default:
        res.status(404).send('Invalid clue number');
        break;
    }
}).post(authMiddleware.isAuthenticated, (req, res, next) => {
    
    const clueNumber = parseInt(req.params.clueNumber);

    switch(clueNumber) {
      case 1:
        clueController.checkClue1(req, res, next);
        break;
    //   case 2:
    //     clueController.checkClue2(req, res, next);
    //     break;
      case 3:
        clueController.checkClue3(req, res, next);
        break;
      case 4:
        clueController.checkClue4(req, res, next);
        break;
      case 5:
        clueController.checkClue5(req, res, next);
        break;
      case 6:
        clueController.checkClue6(req, res, next);
        break;
      case 7:
        clueController.checkClue7(req, res, next);
        break;
      default:
        res.status(404).send('Invalid clue number');
        break;
    }
});

router.route('/2/joke').get(authMiddleware.isAuthenticated, clueController.checkClue2);

router.route('/8/compass').get(clueController.getTreasure);

module.exports = router;    