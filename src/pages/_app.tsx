import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";
import { SessionProvider } from "next-auth/react";
import NavBar from "src/components/NavBar";

export default function App({ Component, pageProps: { session, ...pageProps } }: any) {
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                <NavBar />
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    );
}
