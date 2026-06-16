import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class GenerateTokens {
  generateAccessToken(clientes) {
    const accessToken = jwt.sign(
      {
        id: clientes.user_id,
        email: clientes.user_email,
        role: clientes.role_name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" },
    );

    return accessToken;
  }

  generateRefreshToken(clientes) {
    const refreshToken = jwt.sign(
      {
        id: clientes.user_id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" },
    );

    return refreshToken;
  }
}
export default new GenerateTokens();