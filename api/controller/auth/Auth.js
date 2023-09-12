import Users from "../../models/auth/Users.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  // Menampung data body yang di input user
  const { username, email, password, confirmPassword } = req.body;

  // Menampung data user lalu mencari user berdasarkan email
  const user = await Users.findOne({
    where: {
      email: email
    }
  })

  // Pengecekan Apakah User Sudah Terdaftar / Belum
  if(user) return res.status(400).json({message: "User Already Registered"}) 

  // Pengecekan apakah password sesuai dengan confirm password
  if (password !== confirmPassword)
    return res.status(400).json({ message: "Password do not match" });

  // Mengencrypt Password di database
  const hashPassword = await argon2.hash(password);

  // Mengeksekusi aksi
  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
      confirmPassword: confirmPassword,
    });
    res.status(200).json({ message: "Register Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  // Mengambil 1 Data user berdasarkan email
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  // Pengecekan apakah user sudah terdaftar 
  if (!user) return res.status(404).json({ message: "User Not Found" });

  // pengecekan apakah password benar
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ message: "Wrong Password" });

  // Mengambil data user berdasarkan data masing2
  const userId = user.uuid;
  const username = user.username;
  const email = user.email;
  const role = user.role;

  // Membuat token jika login berhasil
  const accessToken = jwt.sign(
    { userId, username, email, role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "20s",
    }
  );

  // Merefresh Token dengan waktu yang telah di tentukan
  const refreshToken = jwt.sign(
    { userId, username, email, role },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  // Mengupdate user lalu memasukan token yang sudah dibuat
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
  // Mencari 1 data user berdasarkan uuid 
    const user = await Users.findOne({
      where: {
        uuid: req.params.uuid
      }
    })

    // Pengecekan apakah user terdaftar di database
    if(!user) return res.status(404).json({message: "User Not Found"})

    // Menghapus Session jika logout berhasil
    req.session.destroy((err) => {
          if (err) return res.status(400).json({ message: "Tidak Dapat Logout" });
          res.status(200).json({ message: "Anda Telah Logout" });
        });
}








// export const Me = async (req, res) => {
//   if (!req.session.userId)
//     return res.status(401).json({ message: "Mohon Login Ke Akun Anda" });
//   const user = await Users.findOne({
//     attributes: ["id", "username", "email", "role"],
//     where: {
//       id: req.session.userId,
//     },
//   });
//   if (!user) return res.status(404).json({ message: "User Not Found" });
//   res.status(200).json(user);
// };

// export const Logout = async (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.status(400).json({ message: "Tidak Dapat Logout" });
//     res.status(200).json({ message: "Anda Telah Logout" });
//   });
// };
