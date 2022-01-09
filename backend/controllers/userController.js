const User = require('../Models/userModel');
const Luggage = require('../Models/luggageModel');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const getJwt = (userId, secret, exp) => {
  return jwt.sign({ id: userId }, secret, {
    expiresIn: exp
  });
};

exports.getUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json({
    status: true,
    user: user[0]
  });
};

exports.startTrip = async (req, res) => {
  const date = new Date();
  req.body.date = date.toDateString();
  const user = await User.findByIdAndUpdate(
    '61d33af1c50efe0cf3d60989',
    {
      currentTrip: req.body,
      isTravelling: true
    },
    { new: true }
  );
  res.status(200).json({
    status: true,
    currentTrip: user.currentTrip
  });
};

exports.endTrip = async (req, res) => {
  const user = await User.findById('61d33af1c50efe0cf3d60989');
  if (user.currentTrip) {
    user.tripHistory.push(user.currentTrip);
    user.currentTrip.remove();
    user.isTravelling = false;
    const newUser = await user.save();
    return res.status(200).json({
      status: true,
      newUser
    });
  }
  res.status(401).json({
    status: true,
    message: 'Trip never started'
  });
};

exports.addLuggage = async (req, res) => {
  const user = await User.findById('61d33af1c50efe0cf3d60989');
  const newLuggage = await Luggage.create({
    ...req.body,
    owner: '61d33af1c50efe0cf3d60989'
  });
  const token = getJwt(
    newLuggage._id,
    process.env.JWT_KEY,
    process.env.JWT_EXPIRY
  );
  newLuggage.token = token;
  user.currentTrip.luggage.push(newLuggage._id);
  await user.save();
  const luggage = await newLuggage.save();
  res.status(200).json({
    status: true,
    luggage
  });
};

exports.getAllLuggage = async (req, res) => {
  const user = await User.findById('61d33af1c50efe0cf3d60989').populate(
    'currentTrip.luggage'
  );
  res.status(200).json({
    status: true,
    luggage: user.currentTrip.luggage
  });
};
