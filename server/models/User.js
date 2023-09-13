import mongoose from "mongoose";
import bcrypt  from 'bcryptjs'
import jwt  from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
userType: {
    type: String,
    required: true,
    unique: ["donor", "organization", "hospital", "admin"]
},
//this field is required if userType is donor or admin
name: {
    type: String,
    required: function () {
        if (this.userType == "admin" || this.userType == "donor") {
            return true;
        } return false;
    }
},
//this field is required if userType is hospital
hospitalNmae: {
  type: String,
  required: function () {
    if(this.userType === "hospital") {
        return true;
    }return false;
  },  
},
//this field is required if userType is organization
organizationNmae: {
    type: String,
    required: function () {
      if(this.userType === "organization") {
          return true;
      }return false;
    },  
  },
//this field is required if userType is organization or hospital
website: {
    type: String,
    required: function () {
        if (this.userType == "organization" || this.userType == "hospital") {
            return true;
        } return false;
    }
},
//this field is required if userType is organization or hospital
addres: {
    type: String,
    required: function () {
        if (this.userType == "organization" || this.userType == "hospital") {
            return true;
        } return false;
    }
},
//the rest fields are common for all users
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true,
},
phone: {
    type: String,
    required: true,
},
}, {
    timestamps: true
});

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    this.confirmPassword = undefined
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

UserSchema.methods.createJWT = function () {
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
}




export default mongoose.model('Users', UserSchema);
