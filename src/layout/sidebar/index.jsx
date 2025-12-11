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
          <ul className="text-white">
            <li className="hover:bg-red-300 p-2 rounded">
              <p>کاربران</p>
            </li>
            <li className="hover:bg-red-300 p-2 rounded">
              <p>پست ها</p>
            </li>
            <li className="hover:bg-red-300 p-2 rounded">
              <p>کامنت ها</p>
            </li>
            <li className="hover:bg-red-300 p-2 rounded">
              <p>تسک ها</p>
            </li>
            <li className="hover:bg-red-300 p-2 rounded">
              <p>گالری</p>
            </li>
          </ul>
        </div>
      </div>
  );
}
