import * as React from "react";
import BottomDivider from "src/components/BottomDivider";
import TabHeader from "src/components/TabHeader";
import ImagesComponent from "src/components/Images";

function Home() {
    return (
        <div>
            <TabHeader title={"Images"} />
            <ImagesComponent />
            <BottomDivider />
        </div>
    );
}

export default Home;
