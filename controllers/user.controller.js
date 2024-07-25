exports.register = async (req, res) => {
  const { id, username, email, password, confirm_password } = req.body;
  try {
    if (password.length < 6)
      throw new Error("Password should minimum 6 character long");

    if (password !== confirm_password)
      throw new Error("Password and Confirm Password should same.");

    res.status(201).json({
      message: "Register Successfull",
      status: "ok",
      user: {
        id,
        username,
        email,
        password,
        confirm_password,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  res.status(201).send("User login");
};

exports.applications = async (req, res) => {
  res.status(200).send("User Applications");
};

exports.userProfile = async (req, res) => {
  res.status(200).send("User profile");
};

exports.userEditProfile = async (req, res) => {
  res.status(200).send("User edit profile");
};
