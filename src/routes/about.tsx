import React from 'react'
import BowlAndStars from '../images/BowlAndStars.webp'
import Typography from '../Typography'

const About = () => {
  return (
    <div
      className='flex flex-col items-center justify-center px-4 sm:px-24 
    lg:px-48 mb-4 mt-16 overflow-hidden'
    >
      <img
        src={BowlAndStars}
        alt='Bowl and Stars'
        className='max-h-[300px] max-w-[300px]'
      />
      <p className='text-center text-base text-secondary mb-4'>Toni Lima</p>
      <Typography
        variant='h4'
        className='text-center text-text'
      >
        Artist Statement
      </Typography>
      <p className='text-center text-base leading-relaxed italic mb-6 text-secondary'>
        &quot;I’m drawn to ceramics for the balance it demands—between planning
        and improvising, precision and unpredictability. My studio practice
        reflects the rhythms of my life: focused, hands-on, and often a bit of
        creative chaos. Each piece I make is rooted in utility or story (and
        sometimes both), shaped by a love of working with clay and a firm belief
        that even your cereal bowl deserves a little personality. I believe
        pottery should be touched, used, and enjoyed. But most of all, it should
        make you smile.&quot;
      </p>
      <Typography
        variant='h4'
        className='text-center text-text'
      >
        About the Artist
      </Typography>
      <p className='text-center text-lg leading-relaxed italic text-secondary'>
        Toni Lima is a ceramic artist based in Portland Oregon, creating playful,
        functional pottery carved with whimsical creatures. Her colorful,
        story-driven carvings add mischief and narrative to everyday forms; her
        stoneware pieces are made to support the small rituals of daily life; and
        her work in porcelain and black clay explores contrast, form, and
        surface. Toni came to ceramics in 2021 after 15 years as a public school
        special education teacher, where she also trained other educators. She’s
        always been drawn to hands-on work—whether teaching, carving clay, or
        picking up the occasional shift in a restaurant kitchen—pulled by the
        satisfaction of making food and making things. Her practice is shaped by
        curiosity, collaboration, and the belief that pottery should be used,
        enjoyed, and smiled at.
      </p>
    </div>
  )
}
export default About
