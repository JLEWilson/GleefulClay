/* eslint-disable */

// 🏁 Black and White
import BWBowl from '../images/BlackAndWhite/BWBowl.jpg'
import BWPot from '../images/BlackAndWhite/BWPot.jpeg'
import BWPot2 from '../images/BlackAndWhite/BWPot_2.jpeg'
import BWTeaSet from '../images/BlackAndWhite/BWTeaSet.jpeg'

// 🐙 Colorful Creatures
import CCBowls from '../images/ColorfulCreatures/CCBowls.jpeg'
import CCCrabBowl from '../images/ColorfulCreatures/CCCrabBowl.jpeg'
import CCCreature_2 from '../images/ColorfulCreatures/CCCreature_2.jpg'
import CCCreature from '../images/ColorfulCreatures/CCCreature.jpg'
import CCCreature02_2 from '../images/ColorfulCreatures/CCCreature02_2.jpg'
import CCCreature02 from '../images/ColorfulCreatures/CCCreature02.jpg'
import CCCreature03_2 from '../images/ColorfulCreatures/CCCreature03_2.jpg'
import CCCreature03_3 from '../images/ColorfulCreatures/CCCreature03_3.jpg'
import CCCreatures from '../images/ColorfulCreatures/CCCreatures.jpg'
import CCFishBowl from '../images/ColorfulCreatures/CCFishBowl.jpg'
import CCOctopusBowlBottom from '../images/ColorfulCreatures/CCOctopusBowlBottom.webp'
import CCShark_2 from '../images/ColorfulCreatures/CCShark_2.jpg'
import CCShark from '../images/ColorfulCreatures/CCShark.jpg'
import CCSharkTile from '../images/ColorfulCreatures/CCSharkTile.webp'
import CCSnail from '../images/ColorfulCreatures/CCSnail.webp'
import CCWall from '../images/ColorfulCreatures/CCWall.webp'
import CCWallCrab from '../images/ColorfulCreatures/CCWallCrab.webp'
import CCWallFish from '../images/ColorfulCreatures/CCWallFish.webp'
import CCWallSnail from '../images/ColorfulCreatures/CCWallSnail.webp'

// 🍶 Functional Stoneware
import FSBowl01 from '../images/FunctionalStoneware/FSBowl01.jpg'
import FSBowl02 from '../images/FunctionalStoneware/FSBowl02.jpg'
import FSBowl3 from '../images/FunctionalStoneware/FSBowl3.jpg'
import FSDotCups from '../images/FunctionalStoneware/FSDotCups.jpg'
import FSDragon from '../images/FunctionalStoneware/FSDragon.webp'
import FSHouse from '../images/FunctionalStoneware/FSHouse.webp'
import FSHouseDoor from '../images/FunctionalStoneware/FSHouseDoor.webp'
import FSMug01 from '../images/FunctionalStoneware/FSMug01.jpeg'
import FSMug02_2 from '../images/FunctionalStoneware/FSMug02_2.jpg'
import FSMug02 from '../images/FunctionalStoneware/FSMug02.jpg'
import FSMug03_2 from '../images/FunctionalStoneware/FSMug03_2.jpg'
import FSMug03 from '../images/FunctionalStoneware/FSMug03.jpg'
import FSWaveBowl from '../images/FunctionalStoneware/FSWaveBowl.webp'

export type Collections = Record<string, string[]>

const COLLECTIONS: Collections = {
  'Black and White': [BWBowl, BWPot, BWPot2, BWTeaSet],
  'Colorful Creatures': [
    CCBowls,
    CCCrabBowl,
    CCCreature_2,
    CCCreature,
    CCCreature02_2,
    CCCreature02,
    CCCreature03_2,
    CCCreature03_3,
    CCCreatures,
    CCFishBowl,
    CCOctopusBowlBottom,
    CCShark_2,
    CCShark,
    CCSharkTile,
    CCSnail,
    CCWall,
    CCWallCrab,
    CCWallFish,
    CCWallSnail,
  ],
  'Functional Stoneware': [
    FSBowl01,
    FSBowl02,
    FSBowl3,
    FSDotCups,
    FSDragon,
    FSHouse,
    FSHouseDoor,
    FSMug01,
    FSMug02_2,
    FSMug02,
    FSMug03_2,
    FSMug03,
    FSWaveBowl,
  ],
}

export const SLIDESHOW_PHOTOS = [FSDragon, FSHouse, CCSharkTile, CCSnail]

export default COLLECTIONS
