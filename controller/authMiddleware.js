const User = require("../model/user");

exports.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){

        const userId = req.user.id;

        User.findById(userId).then(user => {
            const clueCount = user.clue_num;

            if(clueCount < req.params.clueNumber) {
                return res.redirect("./" + clueCount);
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