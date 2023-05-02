import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';
import img4 from '../assets/images/4.webp';
import img5 from '../assets/images/5.webp';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} Style={
    {flexDirection: 'row'}
  }>
    {/* {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))} */}
    <BodyPart item={img1} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    <BodyPart item={img2} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    <BodyPart item={img3} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    <BodyPart item={img4} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    <BodyPart item={img5} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    <BodyPart item={img1} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    <BodyPart item={img3} setBodyPart={setBodyPart} bodyPart={bodyPart} />
  </ScrollMenu>
);

export default HorizontalScrollbar;
