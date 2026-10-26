import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";
import { AcademyProvider } from "./domain/store";

export default function App() {
  return (
    <AcademyProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            border: "1px solid #303030",
            color: "#F2F2F2",
            fontFamily: "'Inter', sans-serif",
          },
        }}
      />
    </AcademyProvider>
  );
}
