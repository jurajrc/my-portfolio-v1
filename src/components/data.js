import { v4 as uuidv4 } from 'uuid'

//image
import stolar2 from '../image/small/img-stolarstvo-v2-s.png'
import ignite from '../image/small/img-ignite-s.png'
import weather from '../image/small/img-weacher-s.png'
import tunes from '../image/small/img-tunes-s.png'
import player from  '../image/small/img-player-s.png'
import space_web from '../image/small/img-space-s.png'
import jurajrc from '../image/small/img-jurajrc-s.png'
import stolar1 from '../image/small/img-stolarstvo-v1-s.png'

// images


function allgallery () {
    return [
        {
            name: "Stolarstvo JOS v2",
            id: uuidv4(),
            url: "/portfolio/web6",
            http: "http://stolarstvojos.6f.sk/#/",
            image: stolar2,
            images: [],
            github: "https://github.com/jurajrc/stolarstvoJOS.git",
            description: "Prvá verzia tejto stránky bola robená v PHP, po naučení Reaktu som mal chuľ ju hneď prekodiť, malá zmena dizajnu a na oživenie pridal animácie cez Framer Motion",
            package: ["React", "Redux", "Styled component", "Framer motion"],
            technologies: [],
            use_tech: 'React'
        },
        {
            name: "Ignite",
            id: uuidv4(),
            url: "/portfolio/web5",
            http: "http://juraj2021.6f.sk/",
            image: ignite,
            images: [],
            github: "https://github.com/jurajrc/ignite-react-redux.git",
            description: "Aplikácia na vyhľadávanie detailov hry, kde môžu používatelia zobraziť obľúbené, nové a pripravované hry a vyhľadať hru. Vyvinuté na zvýšenie mojich skúseností s ReactJS, Redux, Framer Motion a zhromažďovaním a manipuláciou s údajmi API pomocou Axios.",
            package: ["React", "Styled component", "Framer motion", "Redux", "Axios"],
            technologies: [],
            use_tech: 'React'
        },
        {
            name: "Weather",
            id: uuidv4(),
            url: "/portfolio/web4",
            http: "https://weather.6f.sk/",
            image: weather,
            images: [],
            github: "https://github.com/jurajrc/weather-app",
            description: "Je to vlastná aplikácia kde si uživateľ môže pozrieť aktuálne počasie v mestách celého sveta. Vyvinuté na zvíšenie mojich skúseností v ReactJS, Framer Motion a zhromaždovanim a manipiláciou s údajmi API pomocou Axios",
            package: [],
            technologies: [],
            use_tech: 'React'
        },
        {
            name: "Tunes",
            id: uuidv4(),
            url: "/portfolio/web3",
            http: "http://letlomnica.6f.sk/",
            image: tunes,
            images: [],
            github: "https://github.com/jurajrc/Tunes-TypeScript.git",
            description: "Aplikacia robaná v kurze v Lern2Code kde prví krát stretol s TypeSriptom a ťahať dáta cez API volanie ",
            package: ["React", "Typescript", "Styled component"],
            technologies: [],
            use_tech: 'React'
        },
        {
            name: "Player",
            id: uuidv4(),
            url: "/portfolio/web2",
            http: "http://daniellaart.6f.sk/",
            image: player,
            images: [],
            github: "https://github.com/jurajrc/Player-react.git",
            description: "V aplikácii hudobného prehrávača môžu používatelia prehrávať skladbu z knižnice a povoliť tmavý režim. Vyvinuté na zvýšenie mojich skúseností s ReactJS a modernými háčikmi.",
            package: [],
            technologies: [],
            use_tech: 'React'
        },
        {
            name: "Space Web",
            id: uuidv4(),
            url: "/portfolio/web1.1",
            http: "https://juraj-web2.6f.sk/",
            image: space_web,
            images: [],
            github: "https://github.com/jurajrc/exercise7-app-typescript",
            description: "Cvičenie zo stránky frontend-mentor, nakódiť web podla dizajnu robený vo Figme, tu som si precvičil React Typescript a Redux",
            package: ["React", "Styled component", "Typescript", "Framer motion", "Redux"],
            technologies: [],
            use_tech: 'React'
        },
        {
            name: "Stolarstvo JOS v1",
            id: uuidv4(),
            url: "/portfolio/web0",
            http: "http://matejo.6f.sk/",
            image: stolar1,
            images: [],
            github: "",
            description: "",
            package: [],
            technologies: [
                "https://s2.svgbox.net/files.svg?ic=vscode&color=474724",
                "https://s2.svgbox.net/files.svg?ic=html&color=000",
                "https://s2.svgbox.net/files.svg?ic=scss&color=000",
                "https://s2.svgbox.net/files.svg?ic=js",
                "https://s2.svgbox.net/files.svg?ic=php3"
            ],
            use_tech: 'php'
        },
        {
            name: "JurajRC php",
            id: uuidv4(),
            url: "/portfolio/web1",
            http: "http://www.jurajrc.sk/",
            image: jurajrc,
            images: [],
            github: "",
            description: "Môj osobný web spojený s koníčkom, tu som si odskúšal svoje prvé skúsenosti fromtend vývojom a rozkuskovať kód vďaka PHP.",
            package: [],
            technologies: [
                "https://s2.svgbox.net/files.svg?ic=vscode&color=474724",
                "https://s2.svgbox.net/files.svg?ic=html&color=000",
                "https://s2.svgbox.net/files.svg?ic=scss&color=000",
                "https://s2.svgbox.net/files.svg?ic=js",
                "https://s2.svgbox.net/files.svg?ic=php3"
            ],
            use_tech: 'php'
        },
        
    ]
}



export default allgallery