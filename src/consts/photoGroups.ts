import BWCheckBowl from '../images/BWCheckBowl.webp'
import BWCirclePot from '../images/BWCirclePot.webp'
import BWTeapot from '../images/BWTeapot.webp'
import CCSharkTile from '../images/CCSharkTile.webp'
import CCSnail from '../images/CCSnail.webp'
import CCOctopusBowlBottom from '../images/CCOctopusBowlBottom.webp'
import CCWall from '../images/CCWall.webp'
import CCWallSnail from '../images/CCWallSnail.webp'
import CCWallFish from '../images/CCWallFish.webp'
import FSHouse from '../images/FSHouse.webp'
import FSDragon from '../images/FSDragon.webp'
import FSHouseDoor from '../images/FSHouseDoor.webp'
import FSWaveBowl from '../images/FSWaveBowl.webp'

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
