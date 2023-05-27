import { Text } from "@chakra-ui/react";

import * as React from "react";

import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";

function About() {
    return (
        <div>
            <TabHeader title={"About"} />
            <Text fontSize={18} marginLeft={5} marginTop={5}>
				This site is both my website and portfolio I guess.
			</Text>
			<Text fontSize={18} marginLeft={5} marginTop={5}>
                i might add more to this later but for now here's some text. 
            </Text>
            <BottomDivider />
        </div>
    );
}

export default About;
