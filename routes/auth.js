const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const { registerValidation, loginValidation } = require("../validation");

/**
 * Register route
 */
router.post("/register", async (req, res) => {
  // LETS VALIDATE THE DATA BEFORE WE MAKE A USER
  const { error } = registerValidation.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //    CHECK IF USER IS IN THE DATABASE
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");

  // HASHING OF PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //res.send(validation);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
    // res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

/**
 * Register route
 */

router.post("/login", async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE MAKE A USER
    const { error } = loginValidation.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

//Check if email exist
const user = await User.findOne({ email: req.body.email });
if (!user) return res.status(400).send("Email does not exist");

// check if password is correct
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send('Invalid password');


const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
res.header('auth-token', token).send(token)
// res.send('loggedin successfully')


});

module.exports = router;
