import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Text, Divider } from "@chakra-ui/react";
import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";
import useSWR from "swr";
import fetcher from "src/lib/fetcher";
import CurrentTime from "src/components/CurrentTime";

export default function Loadshedding() {
    const { data } = useSWR<Number>("/api/GetStatus", fetcher);
    const stage = (typeof data === "number" ? data - 1 : NaN) ?? "Fetching stage...";
    const [resolvedValue, setResolvedValue] = useState<string>("Starting timer...");
    const [loading, setLoading] = useState(true);

    async function updateTime() {
        try {
            const time = await CurrentTime();
            if (typeof time === "string") {
                setResolvedValue(time);
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    updateTime();

    return (
        <div>
            <TabHeader title={"Loadshedding"} />
            <Box alignContent={"center"} justifyContent={"center"} textAlign={"center"}>
                <Text fontSize={40}>Loadshedding</Text>
                <Divider justifyContent={"center"} />
                {loading ? <Text fontSize={20}>Loading...</Text> : <Text fontSize={20}>Time: {resolvedValue}</Text>}
                <Text fontSize={20}>Stage: {stage}</Text>
            </Box>
            <BottomDivider />
        </div>
    );
}
