import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";

interface LoginResponse {
  message: string;
  status: number;
  user?: unknown;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { message: "User not found", status: 401 };
    }

    const { password: hashedPassword, ...userWithoutPassword } = user;

    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    if (!isValidPassword) {
      return { message: "Invalid password", status: 401 };
    }

    return {
      user: userWithoutPassword,
      status: 200,
      message: "Login successful",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
