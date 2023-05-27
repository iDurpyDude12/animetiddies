import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import SocialBody from "src/components/SocialBody";
import TabHeader from "src/components/TabHeader";

function Home() {
    return (
        <div>
            <TabHeader title={"durpyneko's socials"} />
            <SocialBody />
            <BottomDivider />
        </div>
    );
}

export default Home;
