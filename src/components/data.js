import { v4 as uuidv4 } from 'uuid'

//images
import stolar2 from '../image/small/img-stolarstvo-v2-s.png'
import ignite from '../image/small/img-ignite-s.png'
import weatcher from '../image/small/img-weacher-s.png'
import tunes from '../image/small/img-tunes-s.png'
import player from  '../image/small/img-player-s.png'
import jurajrc from '../image/small/img-jurajrc-s.png'
import stolar1 from '../image/small/img-stolarstvo-v1-s.png'

function allgallery () {
    return [
        {
            name: "web6",
            id: uuidv4(),
            url: "gallery/web6",
            http: "http://stolarstvojos.6f.sk/#/",
            image: stolar2
        },
        {
            name: "web5",
            id: uuidv4(),
            url: "gallery/web5",
            http: "http://juraj2021.6f.sk/",
            image: ignite
        },
        {
            name: "web",
            id: uuidv4(),
            url: "gallery/web4",
            http: "https://www.shmu.sk/sk/?page=1",
            image: weatcher
        },
        {
            name: "web3",
            id: uuidv4(),
            url: "gallery/web3",
            http: "https://www.youtube.com/",
            image: tunes
        },
        {
            name: "web2",
            id: uuidv4(),
            url: "gallery/web2",
            http: "http://daniellaart.6f.sk/",
            image: player
        },
        {
            name: "web1",
            id: uuidv4(),
            url: "gallery/web1",
            http: "https://www.jurajrc.sk/",
            image: jurajrc
        },
        {
            name: "web0",
            id: uuidv4(),
            url: "gallery/web0",
            http: "http://matejo.6f.sk/",
            image: stolar1
        },
    ]
}

export default allgallery