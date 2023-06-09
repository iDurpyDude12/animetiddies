import { Flex, Text } from "@chakra-ui/react";
import SocialButton from "./SocialButton";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import { SiAnilist } from "react-icons/si";

export default function SocialBody() {
    return (
        <div>
            <Text fontSize={"3xl"} marginTop={4} align={"center"} marginBottom={2}>
                Socials
            </Text>
            <Flex align={"center"} direction={"column"}>
                <SocialButton name="GitHub" href="https://github.com/iDurpyDude12" icon={<FaGithub />}></SocialButton>
                <SocialButton name="Twitter" href="https://twitter.com/" icon={<FaTwitter />} />
                <SocialButton name="AniList" href="https://anilist.co/user/durpyneko/" icon={<SiAnilist />} />
                <SocialButton name="Discord | durpy#7880" href="https://discord.com/" icon={<FaDiscord />} />
            </Flex>
        </div>
    );
}
