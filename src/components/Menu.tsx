// import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = async () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i, index) => (
        <div className="flex flex-col gap-2" key={index}>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              <Image src={item.icon} alt="icon" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
