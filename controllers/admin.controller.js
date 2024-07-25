exports.register = (req, res) => {
  res.status(201).send("Admin register");
};

exports.login = (req, res) => {
  res.status(201).send("Admin login");
};

exports.adminProfile = (req, res) => {
  res.status(200).send("Admin Profile");
};

exports.getJobs = (req, res) => {
  res.status(200).send("Get all Jobs");
};

exports.postJob = (req, res) => {
  res.status(201).send("Post New Job");
};

exports.getQuizzes = (req, res) => {
  res.status(200).send("Get all quizzes on admin");
};

exports.postQuiz = (req, res) => {
  res.status(201).send("Post New Quiz");
};
