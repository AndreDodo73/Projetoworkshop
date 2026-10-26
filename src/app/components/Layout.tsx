import { Outlet } from "react-router";

/** STUB: components/Layout.tsx was not in the partial export. */
export function Layout() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A]">
      <Outlet />
    </div>
  );
}
