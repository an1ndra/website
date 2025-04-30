import Image from "next/image";
import { Settings, LogOut, LogIn, X } from "lucide-react";
import { redirect } from "next/navigation";
export default function ProfileDropdown({
  handleClose,
}: {
  handleClose: (data: boolean) => void;
}) {
  return (
    <div className="relative">
      {
        <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 text-slate-200 p-1 rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          {/* Header with Avatar and Close Button */}
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-700 border border-slate-600 overflow-hidden flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Anindra</span>
                <span className="text-xs text-slate-400">anindra@mail.com</span>
              </div>
            </div>
            <button
              className="h-7 w-7 rounded-full hover:bg-slate-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-600"
              onClick={() => handleClose(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-700 my-1"></div>

          {/* Menu Items */}

          <button
            className="w-full flex items-center gap-2 py-2.5 px-3 cursor-pointer rounded-md hover:bg-slate-700 focus:bg-slate-700 focus:outline-none text-left"
            onClick={() => {
              console.log("login button clicked")
              handleClose(false);
              setTimeout(() => {
                redirect("/login");
              }, 200);
            }}
          >
            <LogIn className="h-4 w-4 text-slate-400" />
            <span>Login</span>
          </button>

          <button
            className="w-full flex items-center gap-2 py-2.5 px-3 cursor-pointer rounded-md hover:bg-slate-700 focus:bg-slate-700 focus:outline-none text-left"
            onClick={() => console.log("Settings clicked")}
          >
            <Settings className="h-4 w-4 text-slate-400" />
            <span>Settings</span>
          </button>

          {/* Divider */}
          <div className="h-px bg-slate-700 my-1"></div>

          <button
            className="w-full flex items-center gap-2 py-2.5 px-3 cursor-pointer rounded-md hover:bg-red-900/30 focus:bg-red-900/30 focus:outline-none text-red-400 text-left"
            onClick={() => console.log("Sign out clicked")}
          >
            <LogOut className="h-4 w-4" />
            <span>Sign out</span>
          </button>
        </div>
      }
    </div>
  );
}
