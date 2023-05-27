import { Button, Flex, Input, Container } from "@chakra-ui/react";
import { useState } from "react";
import * as React from "react";
import fs from "fs";
import ytdl from "ytdl-core";

import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";

function Music() {
    const [videoUrl, setVideoUrl] = useState("");

    /* const youtubeDL = require("youtube-dl"); */
    const youtubeDL = require("youtube-dl-exec");
    const apiKey = "AIzaSyDDMmeJ7vW-AYpPL1pWAQxtSI9EYDruYoI";
    const videoId = videoUrl;

    function ytDownload() {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
            .then(response => response.json())
            .then(data => {
                // Extract the audio from the video using youtube-dl
                const url = `https://www.youtube.com/watch?v=${videoId}`;
                const options = ["-x", "--audio-format", "mp3"];
                const video = youtubeDL(url, options);
                video.on("info", info => {
                    console.log(`Extracting audio from "${info.title}"...`);
                });
                video.pipe(fs.createWriteStream(`${data.items[0].snippet.title}.mp3`));
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <TabHeader title={"Music"} />
            <Flex>
                <Input
                    id="search-url"
                    type="text"
                    placeholder="Search"
                    variant={"filled"}
                    width="92vw"
                    marginLeft={4}
                    marginRight={4}
                    marginTop={4}
                    onChange={e => setVideoUrl(e.target.value)}></Input>
                <Button onClick={ytDownload} marginTop={4} marginRight={4}>
                    Enter
                </Button>
            </Flex>
            <Flex>
                <Container></Container>
            </Flex>

            {/* <Text marginTop={4} marginLeft={4}>
                <iframe id="widgetv2Api" src={videoUrl} width="97%vw" height="600px" color="#2f0628"></iframe>
            </Text> */}
            <BottomDivider />
        </div>
    );
}

export default Music;
