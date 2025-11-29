"use client"

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Book,
  Compass,
  LayoutDashboard,
  PencilRulerIcon,
  UserCircle2Icon,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddNewCourseDialog from "./AddNewCourseDialog";

const SideBarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-learning",
  },
  {
    title: "Explore Courses",
    icon: Compass,
    path: "/workspace/explore",
  },
  {
    title: "AI Tools",
    icon: PencilRulerIcon,
    path: "/workspace/ai-tools",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/workspace/billing",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/profile",
  },
];

const AppSidebar = () => {
  const path = usePathname()

  const isActive = (itemPath) => {
    if (itemPath === "/workspace") {
      return path === "/workspace";
    }
    return path === itemPath || path.startsWith(itemPath + "/");
  }

  return (
    <Sidebar>
      <SidebarHeader className={"p-4"}>
        <Image src={"/logo.svg"} alt="SkillUp AI" width={140} height={140} />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <AddNewCourseDialog>
            <Button
              className={
                "cursor-pointer hover:scale-102 active:scale-97 transition-all duration-300"
              }
            >
              Create New Course
            </Button>
          </AddNewCourseDialog>
        </SidebarGroup>

        <hr />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SideBarOptions.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className={"p-5 rounded-lg"}>
                    <Link
                      href={item.path}
                      className={`text-[17px] flex items-center gap-3 hover:shadow-md
                      ${
                        isActive(item.path)
                          ? "bg-purple-200 shadow-md"
                          : "text-muted-foreground"
                      }`}
                    >
                      <item.icon className="h-7 w-7" />
                      <span className="font-sans">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
