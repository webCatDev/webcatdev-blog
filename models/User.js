import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Her kullanıcının bir kullanıcı adı olmalı."],
    unique: [true, "Kullanıcı adı zaten var."],
    minLength: [3, "Kullanıcı adı en az 3 karakterden oluşmalıdır."],
  },
  password: {
    type: String,
    required: [true, "Kullanıcı şifresi gereklidir."],
    minLength: [6, "Şifre en az 6 karakterden oluşmalıdır."],
  },
  email: {
    type: String,
    required: [true, "E-posta gereklidir."],
    unique: [true, "E-posta eşsiz olmalıdır."],
    validate: {
      validator: function (value) {
        return value.includes("@");
      },
      message: "E-posta @ işareti içermelidir.",
    },
  },
  role: {
    type: String,
    default: "User",
    enum: { values: ["User", "Admin"], message: "{VALUE} geçerli değil." },
  },
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
