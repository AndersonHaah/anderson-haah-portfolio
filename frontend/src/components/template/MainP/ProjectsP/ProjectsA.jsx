import React, { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'
import './ProjectsA.css'
import CardContainer from "./cards/CardContainer";
import { motion, AnimatePresence, transform } from 'framer-motion';
import ExperienceIcon from '../../../assets/imgs/animation/ExperienceIcon';

export default props =>
    <div className="project" id="project">
        <h1 className="display-6 language-P">
            <Typewriter
                words={['O que eu já criei.']}
                cursor
                cursorStyle='_'
                typeSpeed={150}
            />
        </h1>
        <div className="swipe-indicator-left">
            <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                <i class="bi bi-chevron-double-left">Conhecimentos</i>
            </motion.div>
        </div>
        <CardContainer />
    </div>