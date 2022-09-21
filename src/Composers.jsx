import {useState} from 'react'
import "./Composers.css"

const composersList = [
    {
        name: "Bach, Johann Sebastian", 
        wasBorn: "March 21, 1685", 
        img: "https://www.sfcv.org/sites/default/files/styles/thumbnail_130x130/public/media/unsorted/xth_bach.jpg,qh=be675dda,aitok=HSKvwO6S.pagespeed.ic.LEBSXFtmtK.jpg", 
        masterpiece: "The Well-Tempered Clavier"
    },
    {
        name: "Borodin, Alexander Porfiryevich",
        wasBorn: "October 31, 1833",
        img: "https://www.sfcv.org/sites/default/files/styles/thumbnail_130x130/public/media/2011-06/xBorodin_thumb.jpg,qh=be675dda,aitok=ZUrXEhkC.pagespeed.ic.iSfxPmmbAX.jpg",
        masterpiece: "Symphony No. 1"
    },
    {
        name: "Debussy, Claude",
        wasBorn: " August 22, 1862",
        img: "https://www.sfcv.org/sites/default/files/styles/thumbnail_130x130/public/media/unsorted/xth_debussy.jpg,qh=be675dda,aitok=tLZZl6r2.pagespeed.ic.ve2gg4K7N8.jpg",
        masterpiece: "Clair De Lune"
    },
    {
        name: "Elgar, Sir Edward William",
        wasBorn: "June 2, 1857",
        img: "https://www.sfcv.org/sites/default/files/styles/thumbnail_130x130/public/media/unsorted/xElgar130.jpg,qh=be675dda,aitok=wc_Nw1ct.pagespeed.ic.A1IXHXFQLh.jpg",
        masterpiece: "Enigma Variations"
    },
    {
        name: "Mozart, Wolfgang Amadeus",
        wasBorn: "January 27, 1756",
        img: "https://www.sfcv.org/sites/default/files/styles/thumbnail_130x130/public/media/unsorted/th_mozart.jpg?h=be675dda&itok=Rlhlo8Av",
        masterpiece: "Eine Kleine Nacht Musik"
    }

]

export default function Composers() {
    const [randomCI, setRandomCI] = useState(0)
    const randomiseCI = () => {
        setRandomCI(Math.floor(Math.random() * composersList.length)) 
    } 
    return (
        <div>
            <figure className="composers_figure">
                <img className="composers_img" src={composersList[randomCI].img}></img>
                <figcaption className="composers_figcaption">{composersList[randomCI].name}</figcaption>
            </figure>
            <p className="composers_p">Was born on {composersList[randomCI].wasBorn} and became kinda cool guy, check out his masterpiece "{composersList[randomCI].masterpiece}"
            </p>
            <button className="composers_button" onClick={randomiseCI}>Check out some other cool dudes</button>
        </div>
    )
}