import { React, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { invisibleValues, motion } from "framer-motion";

import Images from "../../../../assets/imgs/icons/Images";
import "./KnowledgeMQ.css";
import ProjectMqA from '../../ProjectsP/projectMqP/ProjectMqA'



const techStack = [
    {
        img: Images.IconAjax,
        alt: "Ícone do Ajax",
        text: "AJAX (Asynchronous JavaScript and XML) é uma técnica que permite que páginas da web façam requisições assíncronas ao servidor, sem precisar recarregar a página. Isso permite, por exemplo, carregar novos dados dinamicamente, como em feeds ou formulários interativos."
    },
    {
        img: Images.IconBootstrap,
        alt: "Ícone do Bootstrap",
        text: "Bootstrap é um framework CSS desenvolvido pelo Twitter que facilita a criação de layouts responsivos com uma coleção de componentes pré-prontos (botões, grids, navbars, modais etc). Ele usa um sistema de grid baseado em colunas e pode ser customizado com Sass."
    },
    {
        img: Images.IconCSS3,
        alt: "Ícone do CSS3",
        text: "CSS3 é a tecnologia usada para estilizar páginas HTML. A terceira versão trouxe avanços como animações, transições, gradientes, flexbox, grid layout e media queries, permitindo designs mais ricos, responsivos e interativos sem depender de JavaScript."
    },
    {
        img: Images.IconGulp,
        alt: "Ícone do Gulp",
        text: "Gulp é um automatizador de tarefas para projetos front-end. Ele permite compilar arquivos Sass, minificar CSS/JS, otimizar imagens, e muito mais. Usa um sistema de streams para processar arquivos rapidamente, sendo útil em pipelines de build."
    },
    {
        img: Images.IconHTML5,
        alt: "Ícone do HTML5",
        text: "HTML5 é a versão mais recente da linguagem de marcação usada para estruturar páginas da web. Ele introduziu novas tags semânticas, suporte para áudio, vídeo e gráficos via canvas e svg, formulários mais inteligentes, e maior integração com APIs."
    },
    {
        img: Images.IconJQUERY,
        alt: "Ícone do jQuery",
        text: "jQuery é uma biblioteca JavaScript criada para simplificar a manipulação do DOM, eventos e requisições AJAX. Antes dos frameworks modernos, era amplamente usada por facilitar tarefas repetitivas com uma sintaxe simples e compatibilidade entre navegadores."
    },
    {
        img: Images.IconJS,
        alt: "Ícone do JavaScript",
        text: "JavaScript é uma linguagem de programação essencial para o desenvolvimento web. Ele permite criar páginas interativas, manipular o DOM, responder a eventos do usuário, e também pode ser usado no backend com Node.js. É a base de frameworks modernos como React, Vue e Angular."
    },
    {
        img: Images.IconREACT,
        alt: "Ícone do React",
        text: "React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário baseadas em componentes reutilizáveis. Ele é conhecido por sua performance, renderização eficiente com o virtual DOM e por facilitar o desenvolvimento de aplicações web modernas de página única (SPAs)."
    },
    {
        img: Images.IconWEBPACK,
        alt: "Ícone do Webpack",
        text: "Webpack é um empacotador de módulos JavaScript que agrupa todos os arquivos (JS, CSS, imagens, etc.) em bundles otimizados para produção. Ele também permite usar loaders (como Babel ou Sass) e plugins para transformar e organizar seus recursos web."
    }
];

export default function KnowledgeMQ() {
    const [pageVisible, setPageVisivible] = useState('knowledgemq')
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
        <div
            className="project-knowledgemq"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="3000"
        >
            <motion.div
                drag="x"
                dragSnapToOrigin={true}
                onDragEnd={(event, info) => {
                    const swipeThreshold = 50
                    if (info.offset.x < -swipeThreshold) {
                        setPageVisivible('projectmq')
                    }
                }}
                variants={variants}
                animate={pageVisible === 'knowledgemq' ? 'visible' : 'invisibleLeft'}
            >
                <div className="knowledgemq">
                    <h1 className="display-6 language-KMQ">
                        <Typewriter
                            words={["Tech Stack."]}
                            cursor
                            cursorStyle="_"
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
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="img-text"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={tech.img} className="img" alt={tech.alt} />
                            <p>{tech.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                drag="x"
                dragSnapToOrigin={true}
                onDragEnd={(event, info) => {
                    const swipeThreshold = 50
                    if (info.offset.x > swipeThreshold) {
                        setPageVisivible('knowledgemq')
                    }
                }}
                variants={variants}
                animate={pageVisible === 'projectmq' ? 'visible' : 'invisibleRight'}
                className="projectmq"
            >
                <ProjectMqA />
            </motion.div>
        </div>
    );
}
