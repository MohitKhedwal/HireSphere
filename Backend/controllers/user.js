import { User } from "../models/user_model.js";
import { apiResponse, tokenGenerator } from "../utilites/utilityexport.js";
import bcrypt from "bcryptjs";

async function register(req, res) {
  try {
    const { fullname, email, phoneno, password, role } = req.body;
    if (!fullname || !email || !phoneno || !password || !role) {
      return res.status(400).json(
        new apiResponse({
          status: 400,
          message: "Please fill all fields",
          success: false,
        })
      );
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json(
        new apiResponse({status:400,
          message: "Email already exists",
        success: false,
        })
      );
    }
    const hasedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneno,
      password: hasedPassword,
      role,

    });
    return res.status(201).json({
      message: "User  Registred",
      success: true,
    });
  } catch (e) {
    console.log(e)
    return res.status(500).json(
      new apiResponse({
        status: 400,
        message: "Error in user registeeer",
        sucess: false,
      })
    );
  }
}
async function login(req, res) {
  try {
    const { email, password, phoneno,role } = req.body;
    if ( !password || (!email && !phoneno) || !role  ) {
      return res.status(500).json(
        new apiResponse({
          message: "Fill all fields",
          sucess: false,
        })
      );
    }
    let user = await User.findOne({
      $or: [{ email: email }, { phoneno: phoneno }]
    });
    if (!user) {
      return res.status(404).json(
        new apiResponse({
          message: "Not user ",
          sucess: false,
        })
      );
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(500).json(
        new apiResponse({
          message: "Wrong password",
          sucess: false,
        })
      );
    }
    if (role != user.role) {
      return res.status(500).json(
        new apiResponse({
          message: "Wrong role",
          sucess: false,
        })
      );
    }
    const token =  await tokenGenerator(user._id);
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneno: user.phoneno,
      role: user.role,
      profile: user.profile
  }
    
    
    return res.status(200).cookie(
      "token",token,{
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      }
    ).json(
      new apiResponse({
        user,
        message: "Login Successfull",
        sucess:true
      })
    );
  } catch (e) {
    console.log(e)
    return res.status(500).json(
      new apiResponse({
        message: "ERROR In user Login",
        sucess: false,
      })
    );
  }
}

async function logout(req, res) {
  try {
    const cookies = [
      {
        name: "token",
        value: "",
        oprions: {
          maxAge: 0,
        },
      },
    ];
    // clear the  token
    return res.status(400).json(
      new apiResponse({
        message: "Logout Successfull",
      })
    );
  } catch (e) {
    return res.status(500).json(
      new apiResponse({
        message: "logout Error",
        sucess: false,
      })
    );
  }
}

async function updateProfile(req, res) {
  try {
    const file = req.file;
    const { fullname, email, phoneno, bio, skills } = req.body;
    
    // now skills will come in strings we have to convert it in array
   let   skillsArray ;
   if(skills){
    skillsArray = skills.split(" ,");
   }
    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json(
        new apiResponse({
          message: "user not found",
          sucess: false,
        })
      );
    }
    if(fullname)(user.fullname = fullname)
    if(email)(user.email = email) 
    if(phoneno) (user.phoneno = phoneno)
    if(bio) (user.profile.bio = bio)
    if(skills)(user.profile.skills = skillsArray)
    // resume  will be added later
    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneno: user.phoneno,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json(
      new apiResponse({
        message: "User  profile Updated",
        sucess: true,

      })
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json(
      new apiResponse({
        message: "Error in user update profile",
        sucess: false,
      })
    );
  }
}
export { register, login, logout, updateProfile };