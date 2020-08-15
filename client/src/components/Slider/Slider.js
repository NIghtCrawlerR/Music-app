import React from 'react';
import {
  Slider as ReactSlider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';

import Preloader from 'components/Preloader';

import {
  CarouselProvider,
  Slide,
  ButtonsWrap,
  ButtonBack,
  ButtonNext,
  CarouselHeader,
} from './styles';

const SLIDE_SIZE = 264;

const Slider = ({ items, component, propName, children, loading }) => {
  const container = document.querySelector('.MainContainer');
  const containerWidth = container && container.offsetWidth;

  const itemsPerRow = Math.floor(containerWidth / SLIDE_SIZE);

  const renderSlides = () => items.map((item, i) => (
    <Slide index={i} key={i}>
      {React.createElement(component, { [propName]: item })}
    </Slide>
  ));

  return (
    <CarouselProvider
      naturalSlideWidth={SLIDE_SIZE}
      naturalSlideHeight={SLIDE_SIZE + 50}
      totalSlides={items.length}
      visibleSlides={itemsPerRow || 4}
      step={itemsPerRow || 4}
    >
      <CarouselHeader className="CarouselHeader">
        {children}
        <ButtonsWrap>
          <ButtonBack />
          <ButtonNext />
        </ButtonsWrap>
      </CarouselHeader>
      {loading && <Preloader />}
      <ReactSlider>
        {renderSlides()}
      </ReactSlider>
    </CarouselProvider>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  propName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  component: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Slider;
