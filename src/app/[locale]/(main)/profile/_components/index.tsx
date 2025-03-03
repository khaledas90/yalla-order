import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabLink } from "@/utils/Profile";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import MyAccount from "./MyAccount";
import clsx from "clsx";
import MyOrder from "./MyOrder";

const Profile = () => {
  const t = useTranslations("common.profile");

  return (
    <div className="profile lg:mx-20 mx-5">
      <div className="grid grid-cols-1 w-full h-auto justify-center shadow-lg rounded-[20px] bg-white mt-6">
        <Tabs defaultValue="account" className="w-full lg:flex md:inline">
          {/* Fixed Sidebar */}
          <div className="col-span-1 border rounded-[20px]">
            <div className="text-center bg-black py-2 px-4 rounded-t-[20px] text-white">
              <h1 className="font-bold text-3xl px-4 py-4">
                {t("My Account")}
              </h1>
            </div>
            <TabsList className="h-auto bg-white space-y-3 w-full flex flex-col justify-start items-start border rounded-b-[20px] overflow-y-auto">
              {TabLink.map((item) => {
                const tabValue = item.title.toLowerCase().replace(" ", "-");
                return (
                  <TabsTrigger
                    key={item.title}
                    value={tabValue}
                    className={clsx(
                      "py-4 px-6 justify-start w-full md:text-2xl text-black hover:bg-main hover:border-primary border-white hover:text-white cursor-pointer flex items-center gap-2 border-l-4",
                      "data-[state=active]:bg-main data-[state=active]:text-white data-[state=active]:border-primary"
                    )}
                  >
                    <span className="p-2 rounded-full flex items-center justify-center">
                      <Icon icon={item.icon} width="44" height="44" />
                    </span>
                    <h4 className="text-2xl">{t(`profile-${item.title}`)}</h4>
                  </TabsTrigger>
                );
              })}
              <TabsTrigger
                value="logout"
                className={clsx(
                  "py-4 px-6 justify-start w-full md:text-2xl cursor-pointer flex items-center gap-2 hover:bg-red-500 hover:text-white",
                  "data-[state=active]:bg-red-600 data-[state=active]:text-white"
                )}
              >
                <span className="p-2 rounded-full flex items-center justify-center">
                  <Icon icon="humbleicons:logout" width="44" height="44" />
                </span>
                <h4 className="text-2xl">{t("profile-logout")}</h4>
              </TabsTrigger>
            </TabsList>
          </div>
          {/* Scrollable Content Area */}
          <div className="col-span-3 w-full overflow-x-auto">
            <div className="max-h-[calc(100vh-9rem)] overflow-y-auto">
              <TabsContent value="account">
                <MyAccount />
              </TabsContent>
              <TabsContent value="edit-profile">
                <MyAccount />
              </TabsContent>
              <TabsContent value="my-order">
                <MyOrder />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;