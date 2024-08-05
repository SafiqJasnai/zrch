import { signOut } from "next-auth/react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/login');
    }
    return (
        <Button onClick={handleLogout}>Sign out</Button>
    )
}
  