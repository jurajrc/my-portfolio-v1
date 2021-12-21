import { v4 as uuidv4 } from 'uuid'

//images
import stolar2 from '../image/small/img-stolarstvo-v2-s.png'
import ignite from '../image/small/img-ignite-s.png'
import weather from '../image/small/img-weacher-s.png'
import tunes from '../image/small/img-tunes-s.png'
import player from  '../image/small/img-player-s.png'
import bart_web from '../image/small/img-bart-web-s.png'
import jurajrc from '../image/small/img-jurajrc-s.png'
import stolar1 from '../image/small/img-stolarstvo-v1-s.png'

function allgallery () {
    return [
        {
            name: "Stolarstvo JOS v2",
            id: uuidv4(),
            url: "gallery/web6",
            http: "http://stolarstvojos.6f.sk/#/",
            image: stolar2,
            github: "https://github.com/jurajrc/stolarstvoJOS.git"
        },
        {
            name: "Ignite",
            id: uuidv4(),
            url: "gallery/web5",
            http: "http://juraj2021.6f.sk/",
            image: ignite,
            github: "https://github.com/jurajrc/ignite-react-redux.git"
        },
        {
            name: "Weather",
            id: uuidv4(),
            url: "gallery/web4",
            http: "https://weather.6f.sk/",
            image: weather
        },
        {
            name: "Tunes",
            id: uuidv4(),
            url: "gallery/web3",
            http: "http://letlomnica.6f.sk/",
            image: tunes,
            github: "https://github.com/jurajrc/Tunes-TypeScript.git"
        },
        {
            name: "Player",
            id: uuidv4(),
            url: "gallery/web2",
            http: "http://daniellaart.6f.sk/",
            image: player,
            github: "https://github.com/jurajrc/Player-react.git"
        },
        {
            name: "bart-web",
            id: uuidv4(),
            url: "gallery/web1.1",
            http: "http://jurajrc.6f.sk/",
            image: bart_web
        },
        {
            name: "JurejRC v1",
            id: uuidv4(),
            url: "gallery/web1",
            http: "http://www.jurajrc.sk/",
            image: jurajrc
        },
        {
            name: "Stolarstvo JOS v1",
            id: uuidv4(),
            url: "gallery/web0",
            http: "http://matejo.6f.sk/",
            image: stolar1
        },
    ]
}

export default allgallery