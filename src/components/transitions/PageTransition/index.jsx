import React from "react";

import {LeftPanel, RightPanel} from "./styles.js";

// Transition Animation
const transition = {duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9]};

function PageTransition() {
    return (
        <div>
            <LeftPanel
                initial={{height: 0}}
                animate={{
                    height: [0, window.innerHeight, 0],
                    bottom: [null, 0, 0],
                }}
                exit={{
                    height: [0, window.innerHeight, 0],
                    top: [null, 0, 0],
                }}
                transition={{
                    ...transition,
                    duration: 2,
                    times: [0, 0.5, 1],
                }}></LeftPanel>
        </div>
    );
}

export default PageTransition;
