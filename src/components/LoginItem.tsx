import { useSession, signIn, signOut } from "next-auth/react";
import { MenuItem } from "@chakra-ui/react";

export default function LoginItem() {
    const { data: session } = useSession();

    if (session)
        return (
            <MenuItem onClick={() => signOut()} marginTop={2}>
                Logout
            </MenuItem>
        );
    return (
        <MenuItem onClick={() => signIn()} marginTop={2}>
            Login
        </MenuItem>
    );
}
