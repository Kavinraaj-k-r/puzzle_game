const catchAsync = require('../utils/catchAsync');

const User = require('../model/user');

exports.getClue1 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
      pageTitle: "Level - 1",
      desc: "Your journey begins here. Are you ready to test your skills and embark on a thrilling adventure to uncover the world's most elusive treasure?",
      riddle: "The first clue is hidden in the source code of this webpage. Look carefully and you'll find what you seek.",
      clueNo: 1,
      errorMsg: ""
  });
});

exports.getClue2 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 2",
        desc: "You found the first clue, great job! Your next clue is a riddle. I can be cracked, made, told, and played. What am I?",
        riddle: "Users can find the next level clue by typing the answer into the URL bar after the website's domain name. For example, if the website's domain name is www.puzzlegame.com, users would type www.puzzlegame.com/answer to access the next clue.",
        clueNo: 2,
        errorMsg: ""
    });
  });

// 14040
exports.getClue3 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 3",
        desc: "You found the first clue, great job! Your next clue is in the image",
        riddle: "This clue requires the player to carefully examine an image for hidden numbers. The player needs to identify the least, highest and count numbers in the image and combine them to form a code. Once the player has found the code, they can proceed to the next clue.",
        clueNo: 3,
        errorMsg: ""
    });
  });

// 2005
exports.getClue4 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 4",
        desc: "Great job finding the hidden code! Now find the year the treasure was hidden by using the previous number in clue 1 and the following riddle number",
        riddle: "The riddle:I am an odd number. Take away a letter, and I become even. What number am I? (You need to use the previous number in clue 1 and this number to find a year the tressure is hide.",
        clueNo: 4,
        errorMsg: ""
    });
  });

// ADVENTURE
exports.getClue5 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 5",
        desc: "",
        riddle: "You're making great progress! For the next clue, you'll need to solve a puzzle. Arrange the jumbled letters to form a word: 'DVENATRUE'.",
        clueNo: 5,
        errorMsg: ""
    });
  });

// THINK
exports.getClue6 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 6",
        desc: "You're getting closer to the treasure!",
        riddle: "The next clue is hidden within a famous speech by a tech icon. Look for the words that encourage you to use your imagination and think outside the box. The answer to this clue is a single word that relates to our treasure hunt game.",
        clueNo: 6,
        errorMsg: ""
    });
  });

exports.getClue7 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 7",
        desc: "",
        riddle: "Congratulations on making it this far! For the next clue, you'll need to decipher this message 'AHWSRNECO' with the key 3 1 2",
        clueNo: 7,
        errorMsg: ""
    });
  });

exports.getClue8 = catchAsync(async (req, res, next) => {
    res.render("clues/clue", {
        pageTitle: "Level - 8",
        desc: "Congratulations! You have followed all the clues and made it to the final step. To find the treasure, you must decipher this riddle:",
        riddle: "I am an object that is often found in a corner, But I am not a piece of furniture, nor a mourner. I can be made of paper, but also of steel, And when you put me to use, you'll find out how I feel. What am I? User can find the treasure by typing the answer into the URL bar after the website's domain name",
        clueNo: 8,
        errorMsg: ""
    });
  });

exports.getTreasure = catchAsync(async (req, res, next) => {
  res.render("clues/treasure", {
    pageTitle: "congratulations",
  });
})

exports.checkClue1 = catchAsync(async (req, res, next) => {
    let errorMsg = "";
    const ans = req.body.answer.toLowerCase().trim();

    if(ans === 'map') {   
      const userId = req.user.id;

      User.findById(userId).then(user => {
          user.clue_num = 2;
          user.save();
        }).catch(error => {
          console.error(error)
        });

      return res.redirect("./2");
    }

    errorMsg = "Wrong answer. Try again!";
    res.render("clues/clue", {
        pageTitle: "Level - 1",
        desc: "Your journey begins here. Are you ready to test your skills and embark on a thrilling adventure to uncover the world's most elusive treasure?",
        riddle: "The first clue is hidden in the source code of this webpage. Look carefully and you'll find what you seek.",
        clueNo: 1,
        errorMsg: errorMsg
    });
  });

exports.checkClue2 = catchAsync(async (req, res, next) => {
    const userId = req.user.id;

    User.findById(userId).then(user => {
        user.clue_num = 3;
        user.save();
      }).catch(error => {
        console.error(error)
      });

    return res.redirect("/clue/3");
});

exports.checkClue3 = catchAsync(async (req, res, next) => {
  let errorMsg = "";
  const ans = req.body.answer.toLowerCase().trim();

  if(ans === '14040') {   
    const userId = req.user.id;

    User.findById(userId).then(user => {
        user.clue_num = 4;
        user.save();
      }).catch(error => {
        console.error(error)
      });

    return res.redirect("/clue/4");
  }

  errorMsg = "Wrong answer. Try again!";
  res.render("clues/clue", {
    pageTitle: "Level - 3",
    desc: "You found the first clue, great job! Your next clue is in the image",
    riddle: "This clue requires the player to carefully examine an image for hidden numbers. The player needs to identify the least, highest and count numbers in the image and combine them to form a code. Once the player has found the code, they can proceed to the next clue.",
    clueNo: 3,
    errorMsg: errorMsg
  });
});

exports.checkClue4 = catchAsync(async (req, res, next) => {
  let errorMsg = "";
  const ans = req.body.answer.toLowerCase().trim();

  if(ans === '2005') {   
    const userId = req.user.id;

    User.findById(userId).then(user => {
        user.clue_num = 5;
        user.save();
      }).catch(error => {
        console.error(error)
      });

    return res.redirect("/clue/5");
  }

  errorMsg = "Wrong answer. Try again!";
  res.render("clues/clue", {
    pageTitle: "Level - 4",
    desc: "Great job finding the hidden code! Now find the year the treasure was hidden by using the previous number in clue 1 and the following riddle number",
    riddle: "The riddle:I am an odd number. Take away a letter, and I become even. What number am I? (You need to use the previous number in clue 1 and this number to find a year the tressure is hide.",
    clueNo: 4,
    errorMsg: errorMsg
  });
});

exports.checkClue5 = catchAsync(async (req, res, next) => {
  let errorMsg = "";
  const ans = req.body.answer.toLowerCase().trim();

  if(ans === 'adventure') {   
    const userId = req.user.id;

    User.findById(userId).then(user => {
        user.clue_num = 6;
        user.save();
      }).catch(error => {
        console.error(error)
      });

    return res.redirect("/clue/6");
  }

  errorMsg = "Wrong answer. Try again!";
  res.render("clues/clue", {
    pageTitle: "Level - 5",
    desc: "",
    riddle: "You're making great progress! For the next clue, you'll need to solve a puzzle. Arrange the jumbled letters to form a word: 'DVENATRUE'.",
    clueNo: 5,
    errorMsg: errorMsg
  });
});

exports.checkClue6 = catchAsync(async (req, res, next) => {
  let errorMsg = "";
  const ans = req.body.answer.toLowerCase().trim();

  if(ans === 'think') {   
    const userId = req.user.id;

    User.findById(userId).then(user => {
        user.clue_num = 7;
        user.save();
      }).catch(error => {
        console.error(error)
      });

    return res.redirect("/clue/7");
  }

  errorMsg = "Wrong answer. Try again!";
  res.render("clues/clue", {
    pageTitle: "Level - 6",
    desc: "You're getting closer to the treasure!",
    riddle: "The next clue is hidden within a famous speech by a tech icon. Look for the words that encourage you to use your imagination and think outside the box. The answer to this clue is a single word that relates to our treasure hunt game.",
    clueNo: 6,
    errorMsg: errorMsg
  });
});

exports.checkClue7 = catchAsync(async (req, res, next) => {
  let errorMsg = "";
  const ans = req.body.answer.toLowerCase().trim();

  if(ans === 'searchnow') {   
    const userId = req.user.id;

    User.findById(userId).then(user => {
        user.clue_num = 8;
        user.save();
      }).catch(error => {
        console.error(error)
      });

    return res.redirect("/clue/8");
  }

  errorMsg = "Wrong answer. Try again!";
  res.render("clues/clue", {
    pageTitle: "Level - 7",
    desc: "",
    riddle: "Congratulations on making it this far! For the next clue, you'll need to decipher this message 'AHWSRNECO' with the key 3 1 2",
    clueNo: 7,
    errorMsg: errorMsg
  });
});