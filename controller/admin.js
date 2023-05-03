const User = require("../model/user");

exports.getDashBoard = (req, res, next) => {
    User.find().then((models) => {
        const count = models.length;

        const time_calc = (time_arr) => {
            let totalTime = 0;

            time_arr.forEach((time) => {
                totalTime += parseInt(time.time);
            })
            
            return totalTime / time_arr.length;
        }

        const userList = models.map(user => ({
            username: user.username,
            clue_num: user.clue_num,
            total_time: ((time_calc(user.time_taken) * user.time_taken.length) / 60000).toFixed(2)
        }));

        const rankList = models.filter(user => user.clue_num >= 8)
        const rankUser = rankList.map(user => ({
            username: user.username,
            clue_num: user.clue_num,
            time_taken: (time_calc(user.time_taken) / 60000).toFixed(2),
        }));

        rankUser.sort((a, b) => (a.time_taken > b.time_taken) ? 1 : -1);
        
        res.render("admin/dashBoard", {
            users: userList,
            user_count: count,
            rankList: rankUser
        });
    })
    .catch((e) => {
      console.log(e);
    });

};