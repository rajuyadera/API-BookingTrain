import Users from "../../models/auth/Users.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ msg: "Password do not match" });
  const hashPassword = await argon2.hash(password);
  if (!hashPassword) return res.status(404).json({ msg: "User Not Found" });
  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
      confirmPassword: confirmPassword,
    });
    res.status(200).json({ msg: "Register Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Not Found" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });

  const userId = user.uuid;
  const username = user.username;
  const email = user.email;
  const role = user.role;

  const accessToken = jwt.sign(
    { userId, username, email, role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "20s",
    }
  );
  const refreshToken = jwt.sign(
    { userId, username, email, role },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  await Users.update(
    {
      refresh_token: refreshToken,
    },
    {
      where: {
        uuid: userId,
      },
    }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ accessToken });
};


export const Logout = async(req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        uuid: req.params.uuid
      }
    })

    if(!user) return res.status(404).json({message: "User Not Found"})

  } catch (error) {
    
  }
}








// export const Me = async (req, res) => {
//   if (!req.session.userId)
//     return res.status(401).json({ msg: "Mohon Login Ke Akun Anda" });
//   const user = await Users.findOne({
//     attributes: ["id", "username", "email", "role"],
//     where: {
//       id: req.session.userId,
//     },
//   });
//   if (!user) return res.status(404).json({ msg: "User Not Found" });
//   res.status(200).json(user);
// };

// export const Logout = async (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.status(400).json({ msg: "Tidak Dapat Logout" });
//     res.status(200).json({ msg: "Anda Telah Logout" });
//   });
// };
