'use client';

import { LoginCard } from "@/components/login/LoginCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/users')
      // Redirect to the user page if already logged in
    }
  }, [session, router])

  return (
    <LoginCard />
  );
}
