import bhani from "./EMERALDQUEEN.jpg"
import kane1 from "./Kane_THESHOOTINGSTAR 1.jpg"
import cha1 from "./Chai Big.jpg"
import chai2 from "./Chai.jpg"
import couchshot from "./couchshot.jpg"
import ponica from "./f5.jpg"
import kane2 from "./Sketch Kane.jpg"
//import Concerts from "./Concerts.jpg"
import sketch1 from "./Issue 1_3rd Project file.jpg"
import heart from "./27.png"
import bhaniTHUMBNAIL from "./EMERALDQUEEN_pngTEST.png"
import kaneTSSThumbnail from "./KaneTSS_THUMBNAIL.png"
import chaiBigThumbnail from "./ChaiBig_THUMBNAIL.png"
import chai2Thumbnail from "./Chai_THUMBNAIL.png"
import ponicaThumbnail from "./f5_THUMBNAIL.png"
import couchshotThumbnail from "./couchshot_THUMBNAIL.png"
//import concertsThumbnail from "./Concerts_THUMBNAIL.png"
import heartThumbnail from "./27_THUMBNAIL.png"
import solaris from './SOLARIS.jpg'
import solarisThumbnail from './Solaris_thumbnail.png'
import monsterSketch from './Monster_sketch.png'


//150dpi is the one
//Apparently small images should be about 200kb max
//And larger high quality should be 500kb max
//More research needed
//My biggest is chai at like 3500
export const imageSources = [
    { src: solaris,  srcSet: solarisThumbnail, title: "Solaris", className: "solaris"},
    { src: monsterSketch,  srcSet: monsterSketch, title: "Monster Sketch", className: "monsterSketch"},
    { src: heart,  srcSet: heartThumbnail, title: "Heart", className: "heart"},
    { src: bhani, srcSet: bhaniTHUMBNAIL, title: "Captain Bhani, the Emerald Queen", className: "bhani"},
    { src: kane1,  srcSet: kaneTSSThumbnail, title: "Kane the Shooting Star", className: "kane1"},
    { src: cha1, srcSet: chaiBigThumbnail, title: "Chai the Golden Crave", className: "cha1"},
    { src: chai2, srcSet: chai2Thumbnail, title: "Chai", className: "chai2"},
    { src: couchshot,  srcSet: couchshotThumbnail, title: "Couch shot", className: "couchshot"},
    { src: ponica,  srcSet: ponicaThumbnail, title: "Ponica", className: "ponica"},
    { src: kane2, title: "Kane", className: "kane2"},
    { src: sketch1, title: "The first sketch I was proud of", className: "sketch1"},
];
//{ src: monsterSketch,  srcSet: monsterSketch, title: "Monster Sketch", className: "monsterSketch"},
imageSources.forEach((original, thumbnail) => {
    imageSources.src = original;
    imageSources.src = thumbnail;
});

imageSources.unshift();

for (let i = 0; i < 7; i++) {
    const image = imageSources[i];
    if (i === 0) {
        image.cols = 4;
        image.rows = 6;
    } else if (i >= 1 && i <= 4) {
        image.cols = 4;
        image.rows = 3;
    }
};

export const featuredGallery = imageSources.slice(0, 8);


  




