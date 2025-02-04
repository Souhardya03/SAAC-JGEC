import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TeamLayout from "./TeamLayout";
import TeamData from "./TeamData";

import {
    pageVariants,
    pageTransition,
} from "../../components/Framer/Animation";
import TeamViewer from "../../components/Modals/TeamViewerModal";

function Member() {
    const [modalData, setModalData] = React.useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Team";
    }, []);

    return (
        <>

            <div className="breadcrumb">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="init"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <h2>Team Members</h2>
                    <span></span>
                    <p>Take look on our Team Members!</p>
                </motion.div>
            </div>

            <motion.div
                exit="out"
                animate="in"
                initial="init"
                variants={pageVariants}
                transition={pageTransition}
            >
                <section id="">
                    <TeamLayout data={TeamData} setModalData={setModalData}/>
                </section>
            </motion.div>
            <TeamViewer modalData={modalData} />
        </>
    );
}

export default Member;
