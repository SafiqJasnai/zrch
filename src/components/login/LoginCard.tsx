'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signIn } from 'next-auth/react'
import { useSearchParams } from "next/navigation"

export function LoginCard() {
  const searchParams = useSearchParams(); // Get query parameters from the URL.
  const callbackUrl = searchParams.get("callbackUrl") || "/users"; // Define a callback URL or use a default one.
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription>Login with a Smile 😊.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
      <Button onClick={() => signIn('google', { callbackUrl })}>Sign in with Google</Button>
      </CardContent>
    </Card>
  )
}
