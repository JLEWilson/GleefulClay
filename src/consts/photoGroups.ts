import BWCheckBowl from '../images/BWCheckBowl.png'
import BWCirclePot from '../images/BWCirclePot.jpg'
import BWTeapot from '../images/BWTeapot.jpg'
import CCSharkTile from '../images/CCSharkTile.png'
import CCSnail from '../images/CCSnail.jpg'
import CCOctopusBowlBottom from '../images/CCOctopusBowlBottom.png'
import CCWall from '../images/CCWall.png'
import CCWallSnail from '../images/CCWallSnail.jpg'
import CCWallFish from '../images/CCWallFish.jpg'
import FSHouse from '../images/FSHouse.jpg'
import FSDragon from '../images/FSDragon.jpg'
import FSHouseDoor from '../images/FSHouseDoor.jpg'
import FSWaveBowl from '../images/FSWaveBowl.jpg'

export type Collections = Record<string, string[]>

const COLLECTIONS: Collections = {
  'Colorful Creatures': [
    CCOctopusBowlBottom,
    CCSharkTile,
    CCSnail,
    CCWall,
    CCWallFish,
    CCWallSnail,
  ],
  'Black and White': [BWCheckBowl, BWCirclePot, BWTeapot],
  'Functional Stoneware': [FSDragon, FSHouse, FSHouseDoor, FSWaveBowl],
  // Add more categories here—no need to touch the view!
}

export const SLIDESHOW_PHOTOS = [FSDragon, FSHouse, CCSharkTile, CCSnail]

export default COLLECTIONS
