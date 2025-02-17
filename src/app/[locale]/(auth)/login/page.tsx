import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import LoginForm from "./_components/loginForm";

const Login = () => {
  const t = useTranslations("common.login");

  return (
    <>
      <div className={`hero bg-gray-700 h-screen `}>
        <div className="container mx-auto flex justify-center items-center px-4 py-16">
          <Card className="lg:w-1/2 md:w-full mt-[5rem] ">
            <CardHeader>
              <CardTitle className="text-center text-3xl uppercase font-bold">
                {t("login")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
