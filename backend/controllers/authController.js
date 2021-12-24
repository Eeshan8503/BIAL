const User=require('./../Models/userModel');
const jwt=require('jsonwebtoken');
const {catchAsync}=require('./../Util/catchAsync');
// ///////////////////////////////////////////////////
const getJwt = (userId, secret, exp) => {
    return jwt.sign({ id: userId }, secret, {
      expiresIn: exp
    });
  };

exports.signup=catchAsync(async (req,res)=>{
    console.log(req.body);
    const newUser=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    });
    const token=getJwt(
        newUser._id,
        process.env.JWT_KEY,
        process.env.JWT_EXPIRY
    )
    res.status(201).send({
        status: true,
        message:
          'A confirmation mail has been send to your email, please verify for full access',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
          confirmPassword: newUser.confirmPassword,
        },
        token
      });
})
exports.check=catchAsync(async(req,res)=>{
    res.send("HELLO");
})