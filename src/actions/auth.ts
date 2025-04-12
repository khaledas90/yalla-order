import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";

interface LoginResponse {
  message: string;
  status: number;
  user?: unknown;
}

interface SignupResponse {
  message: string;
  status: number;
  user?: unknown;
}

export const signup = async (
  name: string,
  email: string,
  password: string
): Promise<SignupResponse> => {
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { message: "User already exists", status: 409 };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return {
      message: "Signup successful",
      status: 201,
      user: userWithoutPassword,
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      message: "Internal server error",
      status: 500,
    };
  }
};
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
