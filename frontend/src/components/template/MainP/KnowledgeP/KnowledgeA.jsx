import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion, AnimatePresence, transform } from 'framer-motion';

import Images from '../../../assets/imgs/icons/Images';
import ExperienceIcon from '../../../assets/imgs/animation/ExperienceIcon';
import './KnowledgeA.css';
import ProjectsA from '../ProjectsP/ProjectsA';
import KnowledgeMQ from './KnowledgeMqP/KnowledgeMQ';

const descriptions = {
    IconJS: 'JavaScript é uma linguagem de programação essencial para o desenvolvimento web. Ele permite criar páginas interativas, manipular o DOM, responder a eventos do usuário, e também pode ser usado no backend com Node.js. É a base de frameworks modernos como React, Vue e Angular.',
    IconREACT: 'React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário baseadas em componentes reutilizáveis. Ele é conhecido por sua performance, renderização eficiente com o virtual DOM e por facilitar o desenvolvimento de aplicações web modernas de página única (SPAs).',
    IconHTML5: 'HTML5 é a versão mais recente da linguagem de marcação usada para estruturar páginas da web. Ele introduziu novas tags semânticas, suporte para áudio, vídeo e gráficos via canvas e svg, formulários mais inteligentes, e maior integração com APIs.',
    IconCSS3: 'CSS3 é a tecnologia usada para estilizar páginas HTML. A terceira versão trouxe avanços como animações, transições, gradientes, flexbox, grid layout e media queries, permitindo designs mais ricos, responsivos e interativos sem depender de JavaScript.',
    IconJQUERY: 'jQuery é uma biblioteca JavaScript criada para simplificar a manipulação do DOM, eventos e requisições AJAX. Antes dos frameworks modernos, era amplamente usada por facilitar tarefas repetitivas com uma sintaxe simples e compatibilidade entre navegadores.',
    IconGulp: 'Gulp é um automatizador de tarefas para projetos front-end. Ele permite compilar arquivos Sass, minificar CSS/JS, otimizar imagens, e muito mais. Usa um sistema de streams para processar arquivos rapidamente, sendo útil em pipelines de build.',
    IconWEBPACK: 'Webpack é um empacotador de módulos JavaScript que agrupa todos os arquivos (JS, CSS, imagens, etc.) em bundles otimizados para produção. Ele também permite usar loaders (como Babel ou Sass) e plugins para transformar e organizar seus recursos web.',
    IconBootstrap: 'Bootstrap é um framework CSS desenvolvido pelo Twitter que facilita a criação de layouts responsivos com uma coleção de componentes pré-prontos (botões, grids, navbars, modais etc). Ele usa um sistema de grid baseado em colunas e pode ser customizado com Sass.',
    IconAjax: 'AJAX (Asynchronous JavaScript and XML) é uma técnica que permite que páginas da web façam requisições assíncronas ao servidor, sem precisar recarregar a página. Isso permite, por exemplo, carregar novos dados dinamicamente, como em feeds ou formulários interativos.',
};

export default function KnowledgeAndProjects() {

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const [view, setView] = useState("div-knowledge")

    const variants = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        invisibleRight: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.5
            }
        },
        invisibleLeft: {
            x: "-100%",
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className="KnowledgeAndProjects" id='KnowledgeAndProjects'>
            <div className="project-knowledge"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="3000">

                <motion.div
                    key="knowledge"

                    drag="x"
                    dragSnapToOrigin={true}
                    onDragEnd={(event, info) => {
                        const swipeThreshold = 50
                        if (info.offset.x < -swipeThreshold) {
                            setView('projectsdiv')
                        }
                    }}
                    variants={variants}
                    animate={view === 'div-knowledge' ? 'visible' : 'invisibleLeft'}
                >
                    <div className="div-knowledge">
                        <h1 className="display-6 language">
                            <Typewriter
                                words={['Tech Stack.']}
                                cursor
                                cursorStyle='_'
                                typeSpeed={150}
                            />
                        </h1>
                        <div className="swipe-indicator-right">
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                               Projetos <i class="bi bi-chevron-double-right"></i>
                            </motion.div>
                        </div>
                        <div className="experience-icons">
                            {Object.entries(Images).map(([key, icon]) => (
                                <ExperienceIcon
                                    key={key}
                                    icon={icon}
                                    alt={key}
                                    onHover={() => setHoveredIcon(key)}
                                    onLeave={() => setHoveredIcon(null)}
                                />
                            ))}
                        </div>

                        <div className="description-area">
                            <AnimatePresence mode="wait">
                                {hoveredIcon ? (
                                    <motion.div
                                        key={hoveredIcon}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="skills-text"
                                    >
                                        {descriptions[hoveredIcon]}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="skills-text"
                                    >
                                        Passe o mouse sobre uma tecnologia para ver a descrição.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    key="projects"
                    drag="x"
                    dragSnapToOrigin={true}
                    onDragEnd={(event, info) => {
                        const swipeThreshold = 50
                        if (info.offset.x > swipeThreshold) {
                            setView('div-knowledge')
                        }
                    }}
                    variants={variants}
                    animate={view === 'projectsdiv' ? 'visible' : 'invisibleRight'}
                    className='projectsdiv'
                >
                    <ProjectsA />
                </motion.div>
            </div >

            <div className="knowledge-project-mq">
                <KnowledgeMQ />
            </div>

        </div>
    );

};
