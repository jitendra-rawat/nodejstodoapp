import jwt from "jsonwebtoken";

export const sendCookies = (user, res, message,statusCode) => {

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(statusCode)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 1000*60*15,
        sameSite:process.env.NODE_ENV === "Development" ? "lax":"none",
        secure:process.env.NODE_ENV === "Developement" ? false:true,
      })
      .json({
        success: true,
        message,
      });
}