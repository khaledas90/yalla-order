import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabLink } from "@/utils/Profile";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import MyAccount from "./MyAccount";
import clsx from "clsx";

const Profile = () => {
  const t = useTranslations("common.profile");

  return (
    <>
      <div className="profile lg:mx-20 mx-5">
        <div className="grid grid-cols-1 w-full h-auto justify-center shadow-lg rounded-[20px] bg-white mt-6">
          <Tabs defaultValue="account" className="w-full lg:flex md:inline">
            <div className="col-span-1 border rounded-[20px] w-full md:w-auto">
              <div className="text-center bg-black py-2 px-4 rounded-t-[20px] text-white">
                <h1 className="font-bold text-3xl px-4 py-4">
                  {t("My Account")}
                </h1>
              </div>
              <TabsList className="h-auto md:h-[65vh] bg-white space-y-3 w-full flex flex-col justify-start items-start border rounded-b-[20px]">
                {TabLink.map((item) => (
                  <TabsTrigger
                    key={item.title}
                    value={item.title.toLowerCase().replace(" ", "-")}
                    className={clsx(
                      "py-4 px-6 justify-start w-full md:text-2xl text-black hover:bg- border-l-4 border-white hover:border-l-4 hover:border-primary hover:text-[#fff] cursor-pointer hover:bg-main flex items-center gap-2",
                      item.title.toLowerCase().replace(" ", "-")
                        ? "bg-primary text-white"
                        : " bg-primary text-white"
                    )}
                  >
                    <span className="p-2 rounded-full flex items-center justify-center">
                      <Icon
                        className=""
                        icon={item.icon}
                        width="44"
                        height="44"
                      />
                    </span>
                    <h4 className="text-2xl">{t(`profile-${item.title}`)}</h4>
                  </TabsTrigger>
                ))}
                <TabsTrigger
                  value="logout"
                  className={clsx(
                    "py-4 px-6 justify-start w-full md:text-2xl cursor-pointer flex items-center gap-2"
                  )}
                >
                  <span className="p-2 rounded-full flex items-center justify-center">
                    <Icon
                      className=""
                      icon={"humbleicons:logout"}
                      width="44"
                      height="44"
                    />
                  </span>
                  <h4 className="text-2xl">{t("profile-logout")}</h4>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="col-span-3 w-full block">
              <TabsContent value="account">
                <MyAccount />
              </TabsContent>
              <TabsContent value="edit-profile">
                <MyAccount />
              </TabsContent>
              <TabsContent value="my-order">
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
