import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabLink } from "@/utils/Profile";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import MyAccount from "./MyAccount";

const Profile = () => {
  const t = useTranslations("common.profile");
  return (
    <>
      <div className="profile lg:mx-20 mx-5">
        <div className="grid  grid-cols-1    w-full h-auto justify-center shadow-lg rounded-[20px] bg-white mt-6 ">
          <Tabs defaultValue="account" className="w-full lg:flex md:inline ">
            <div className="col-span-1 border rounded-[20px] w-full md:w-auto">
              <div className="text-center bg-black py-2 px-4 rounded-t-[20px] text-white">
                <h1 className="font-bold text-3xl px-4 py-4">
                  {t("My Account")}
                </h1>
              </div>
              <TabsList className="h-auto md:h-[65vh]  bg-white space-y-3 w-full flex flex-col justify-start items-start border rounded-b-[20px]">
                {TabLink.map((item) => (
                  <TabsTrigger
                    key={item.title}
                    className="py-4 px-6  justify-start  w-full md:text-2xl text-black hover:bg- border-l-4 border-white hover:border-l-4 hover:border-main hover:text-[#fff] cursor-pointer hover:bg-primary  flex items-center gap-2"
                    value={item.title}
                  >
                    <span className=" p-2 rounded-full flex items-center justify-center">
                      <Icon
                        className=""
                        icon={item.icon}
                        width="44"
                        height="44"
                      />
                    </span>
                    <h4 className=" text-2xl  ">
                      {t("profile-" + item.title)}
                    </h4>
                  </TabsTrigger>
                ))}
                <TabsTrigger
                  className="py-4 px-6  justify-start  w-full md:text-2xl text-black hover:bg- border-l-4 border-white hover:border-l-4 hover:border-main hover:text-[#fff] cursor-pointer hover:bg-primary  flex items-center gap-2"
                  value="logout"
                >
                  <span className="p-2 rounded-full flex items-center justify-center">
                    <Icon
                      className=""
                      icon={"humbleicons:logout"}
                      width="44"
                      height="44"
                    />
                  </span>
                  <h4 className=" text-2xl  ">{t("profile-logout")}</h4>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="col-span-3 w-full block">
              <TabsContent value="Edit Profile">
                <MyAccount />
              </TabsContent>
              <TabsContent value="My Order">
                Change your password here.
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Profile;
