import { Card, SimpleGrid, CardBody, Text, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import DashboardCard from "./DashboardCard";
import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
    const { data: session } = useSession();
    const ref = useRef(null);
    const [fact, setFact] = useState("loading...");

    useEffect(() => {
        axios
            .get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
            .then(response => setFact(response.data.text))
            .catch(error => console.log(error));
    }, []);
    const handleClick = () => {
        axios
            .get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
            .then(response => setFact(response.data.text))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <Card float={"right"} marginRight={4} marginTop={0} marginLeft={2} marginBottom={2} maxWidth={200}>
                <CardBody>
                    <Text id="random-fact" as={"b"}>
                        Random Fact:{" "}
                    </Text>
                    <Text marginTop={3}>{fact}</Text>
                    <Flex justifyContent={"center"}>
                        <Button onClick={handleClick} marginTop={3} marginBottom={-1}>
                            Get a new fact
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Text fontSize={18} marginLeft={5} marginTop={5} marginRight={4}>
                Hello <b>{session?.user.name ?? "anon"}</b>-nyan~ Welcome to the Dashboard!
            </Text>
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                <DashboardCard hrefLink={"/images"} titleName={"Images"} heading={" Image API's"} text={"Get random images from a set of API's"} />
                <DashboardCard
                    hrefLink={"/nsfw"}
                    titleName={"NSFW"}
                    heading={" NSFW Image API's"}
                    text={"Get random NSFW images from a set of API's"}
                    restricted={true}
                />
                <DashboardCard
                    hrefLink={"/music"}
                    titleName={"Music"}
                    heading={" Music"}
                    text={"Download music from multiple sites in mp3/mp4/webm format"}
                />
                <DashboardCard hrefLink={"/discord"} titleName={"Discord"} heading={" Discord"} text={"Talk on Durpy's server through and iframe."} />
                <DashboardCard hrefLink={"/socials"} titleName={"Socials"} heading={" Socials"} text={"durpyneko's social links"} />
                <DashboardCard
                    hrefLink={"/discordwebhook"}
                    titleName={"Webhook"}
                    heading={" Webhook"}
                    text={"Send webhook message with custom params"}
                />
            </SimpleGrid>
        </div>
    );
}
