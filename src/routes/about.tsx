import React from 'react'

import BackgroundSlideshow from '../components/backgroundSlideshow'
import { SLIDESHOW_PHOTOS } from '../consts/photoGroups'

const About = () => {
  return <BackgroundSlideshow images={SLIDESHOW_PHOTOS} />
}
export default About
