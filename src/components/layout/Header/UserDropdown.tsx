import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useClientSession } from "@/hooks/useClientSession";
import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import userIcon from "@/assets/image/user.png";
const UserDropdown = ({
  initialSession,
}: {
  initialSession: Session | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations("common.header");
  const session = useClientSession(initialSession);

  const handleLogout = () => {
    signOut()
      .then(() => {
        toast.success(t("Logout successful"));
        router.push("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error(error.message || t("Logout error"));
      });
  };
  console.log(session?.data?.user);

  return (
    <div className="relative">
      <button
        title="Language"
        type="button"
        className="hover:scale-105 transition-all duration-300 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={userIcon} alt="user" width={45} height={42} />
      </button>

      {isOpen && (
        <div className="absolute z-40 ltr:right-0 rtl:left-0 mt-2 w-28 bg-white shadow-lg rounded-lg border border-gray-200">
          <li className="mt-1 w-full list-none">
            <Link
              href={session?.data?.user.role !== "USER" ? "/admin" : "/profile"}
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-2 text-sm bg-gray-50 text-black hover:bg-gray-100 hover:rounded-lg"
            >
              {session?.data?.user.role !== "USER" ? t("admin") : t("profile")}
            </Link>
          </li>
          <li className="mt-1 w-full list-none">
            <Button
              onClick={handleLogout}
              className="block w-full ltr:text-left rtl:text-right px-4 py-2 text-sm bg-gray-50 text-black hover:bg-gray-100 hover:rounded-lg"
            >
              {t("Logout")}
            </Button>
          </li>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
