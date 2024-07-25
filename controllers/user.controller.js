exports.register = (req, res) => {
  res.status(201).send("User register");
};

exports.login = (req, res) => {
  res.status(201).send("User login");
};

exports.applications = (req, res) => {
  res.status(200).send("User Applications");
};

exports.userProfile = (req, res) => {
  res.status(200).send("User profile");
};

exports.userEditProfile = (req, res) => {
  res.status(200).send("User edit profile");
};
