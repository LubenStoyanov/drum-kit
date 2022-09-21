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

const buttonList = ["C", "h", "e", "c", "k", "", "o", "u", "t", "", "o", "t", "h", "e", "r", "", "d", "u", "d", "e", "s"]

function ComposersText() {
    return (buttonList.map(letter => <li className="composers_li">{letter}</li>))
    
}

export default function Composers() {
    const [randomCI, setRandomCI] = useState(0)
    const randomiseCI = () => {
        setRandomCI(Math.floor(Math.random() * composersList.length)) 
    } 
    return (
        <div className="composers">
            <div className="composers_left">
                <img className="composers_photo" src={composersList[randomCI].img}></img>
                <h3 className="composers_name">{composersList[randomCI].name}</h3>
                <p className="composers_info">
                    Was born on {composersList[randomCI].wasBorn} and became kinda cool guy, check out his masterpiece "{composersList[randomCI].masterpiece}"
                </p>
            </div>
            <div className="composers_right">
                <button className="composers_button" onClick={randomiseCI}>
                    <ul>
                        <ComposersText />
                    </ul>
                </button>
            </div>
        </div>
    )
}