import { useState } from "react";
import { Tab, Tabs, TabPanel, TabPanels, TabList, Image, Text, Flex, Link, Button, Box, Spinner } from "@chakra-ui/react";

export default function Images() {
    const [imageUrl, setImageUrl] = useState("https://media.discordapp.net/attachments/1039951514631933992/1086229302674214982/iu.png");
    const [artistUrl, setArtistUrl] = useState("Not yet loaded...");

    const [loading, setLoading] = useState(false);

    const getNeko = () => {
        fetch("https://nekos.best/api/v2/neko")
            .then(response => response.json())
            .then(json => {
                var artist = document.getElementById("artist");
                var source = document.getElementById("source");
                var loadingText = document.getElementById("loadingText");
                json = json.results[0];
                console.log(json);
                artist?.textContent = "Artist: " + json.artist_name;
                source.textContent = "Source: " + json.source_url;
                /* loadingText.textContent = "Loading..."; */
                setImageUrl(json.url);
                setArtistUrl(json.source_url);
                const timer = setTimeout(() => {
                    setLoading(true);
                }, 0);
                () => clearTimeout(timer);

                const timer2 = setTimeout(() => {
                    setLoading(false);
                }, 2500);
                () => clearTimeout(timer2);
            });
    };
    const getWaifu = () => {
        fetch("https://api.waifu.pics/sfw/waifu")
            .then(response => response.json())
            .then(json => {
                var artist = document.getElementById("artist");
                var source = document.getElementById("source");
                var loadingText = document.getElementById("loadingText");
                setImageUrl(json.url);
                const timer = setTimeout(() => {
                    setLoading(true);
                }, 0);
                () => clearTimeout(timer);

                const timer2 = setTimeout(() => {
                    setLoading(false);
                }, 2500);
                () => clearTimeout(timer2);
            });
    };

    return (
        <Flex direction={"column"}>
            <Tabs colorScheme={"pink"}>
                <TabList>
                    <Tab>Nekos</Tab>
                    <Tab>Waifus</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Button
                            onClick={getNeko}
                            flex="1"
                            width={"100%"}
                            justifyContent={"center"}
                            borderRadius="none"
                            textAlign={"center"}
                            padding={3}
                            colorScheme="pink"
                            borderTopRadius={5}
                            borderBottomRadius={5}>
                            Get Neko
                        </Button>
                        {loading && <Spinner marginTop={2}></Spinner>}
                        <Box boxSize="sm" paddingLeft={5} paddingTop={5} marginBottom={10}>
                            <Image id="NekoImage" maxHeight={400} maxWidth={335} src={imageUrl} alt="Image"></Image>
                        </Box>
                        <Text id="artist" flex={1} paddingLeft={5}></Text>
                        <Link id="source_href" href={artistUrl}>
                            <Text id="source" flex={1} paddingLeft={5} paddingRight={5}></Text>
                        </Link>
                    </TabPanel>
                    <TabPanel>
                        <Flex direction={"column"}>
                            <Button
                                onClick={getWaifu}
                                flex="1"
                                width={"100%"}
                                justifyContent={"center"}
                                borderRadius="none"
                                textAlign={"center"}
                                padding={3}
                                colorScheme="pink"
                                borderTopRadius={5}
                                borderBottomRadius={5}>
                                Get Waifu
                            </Button>
                            {loading && <Spinner marginTop={2}></Spinner>}
                            <Box boxSize="sm" paddingLeft={5} paddingTop={5} marginBottom={10}>
                                <Image id="WaifuImage" maxHeight={400} maxWidth={335} src={imageUrl} alt="Image"></Image>
                            </Box>
                            <Text flex={1} paddingLeft={5}>
                                No sources from this api :(
                            </Text>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}
