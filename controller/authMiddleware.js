const User = require("../model/user");

exports.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){

        const userId = req.user.id;

        User.findById(userId).then(user => {
            const clueCount = user.clue_num;

            if(clueCount != req.params.clueNumber && clueCount != 2) {
                return res.redirect("./" + clueCount);
            } else if(clueCount == 8) {
                return res.redirect("./8/compass");
            }
            return next();
        }).catch(error => {
            console.error(error)
        });
      }
      else {
          res.redirect("/login");
      }
  }

exports.isAdmin = (req, res, next) => {
    if(req.isAuthenticated()){

        const userId = req.user.id;

        User.findById(userId).then(user => {
            if(user.role === true) {
                return next();
            }
        }).catch(error => {
            console.error(error)
        });
      }
      else {
        res.redirect("/login");
      }
  }