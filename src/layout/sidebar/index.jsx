import SidebarItem from "./SidebarItem"

export default function Sidebar() {
  return (
    <div className="fixed right-0 h-screen w-64 bg-blue-400 shadow-lg flex flex-col justify-between">
        {/*topp Content*/}
        <div className="flex justify-between items-center h-16 shadow-md p-2 bg-blue-600 rounded-t-lg">
          <div>
            <h1 className="text-white">پنل مدیریت</h1>
          </div>
          <div>
            <h1 className="text-white">DarkMode</h1>
          </div>
        </div>
        {/* Bottom Content */}
        <div className="flex flex-col gap-4 flex-1 bg-blue-400 rounded-b-lg">
          <ul className="text-black">
            <SidebarItem to="/users">کاربران</SidebarItem>
            <SidebarItem to="/posts">پست ها</SidebarItem>
            <SidebarItem to="/comments">کامنت ها</SidebarItem>
            <SidebarItem to="/tasks">تسک ها</SidebarItem>
            <SidebarItem to="/gallery">گالری</SidebarItem>
          </ul>
        </div>
      </div>
  );
}

