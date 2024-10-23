import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ /,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      match:/^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
    },
    phoneno: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Student", "Recruiter", "Admin"],
      required: true,
    },
    profile: {
      bio: {
        type: String,
      },
      skills: [{ // to pass array[{},{}]
        type: String,
      }],
      certifications: [{
        type: String,
      }],
      experience: {
        type: String,
      },
      degree: {
        type: String,
        // required: true,
      },
      portfolio: {
        type: String, // url to portfolio
      },
      resume: {
        type: String, // url to resume
      },
      resumeVideo: {
        type: String, // url to video resume
      },
      resumeOriginalname: {
        type: String, // original name of resume
      },
      // company: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: j,
      // },
      photo: {
        type: String, // url to photo
      },
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
