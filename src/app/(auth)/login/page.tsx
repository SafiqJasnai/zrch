import { LoginCard } from "@/components/login/LoginCard";
import { Suspense } from "react";

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginCard />
    </Suspense>
  );
}
