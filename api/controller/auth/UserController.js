import argon2 from "argon2";
import Users from "../../models/auth/Users.js";

export const getUser = async (req, res, next) => {
  try {
    const users = await Users.findAll({
      attributes: ["uuid", "username", "email", "role"],
    });
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

export const getUserByUuid = async (req, res, next) => {
  try {
    const users = await Users.findOne({
      where: {
        uuid: req.params.uuid,
      },
      attributes: ["uuid", "username", "email", "role"],
    });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });
  const { username, email, password, confirmPassword, role } = req.body;
  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ message: "Password And Confirm Password Do Not Match" });
  if (user) return res.status(400).json({ message: "Email Already Created" });
  const hashPasword = await argon2.hash(password);
  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPasword,
      confirmPassword: confirmPassword,
      role: role,
    });
    res.status(201).json({ message: "User Created" });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });
  if (!user) return res.status(404).json({ message: "User Not Found!" });
  const { name, email, password, confPassword, role } = req.body;
  let hashPasword;
  if (password === "" || password === null) {
    hashPasword = user.password;
  } else {
    hashPasword = await argon2.hash(password);
  }
  if (password !== confPassword)
    return res
      .status(400)
      .json({ message: "Password And Confirm Password Do Not Match" });

  try {
    await Users.update(
      {
        name: name,
        email: email,
        password: hashPasword,
        role: role,
      },
      {
        where: {
          uuid: user.uuid,
        },
      }
    );
    res.status(200).json({ message: "User Updated" });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });
  if (!user) return res.status(404).json({ message: "User Not Found!" });
  try {
    await Users.destroy({
      where: {
        uuid: user.uuid,
      },
    });
    res.status(200).json({ message: "User Deleted" });
  } catch (err) {
    next(err);
  }
};
