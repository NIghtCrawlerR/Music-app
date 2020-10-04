import styled, { css } from 'styled-components';
import {
  Slide as SlideOriginal,
  CarouselProvider as CarouselProviderOriginal,
  ButtonBack as ButtonBackOriginal,
  ButtonNext as ButtonNextOriginal,
} from 'pure-react-carousel';

export const CarouselProvider = styled(CarouselProviderOriginal)`
  height: 350px;
  margin-bottom: 50px;
`;

export const Slide = styled(SlideOriginal)`
  padding-bottom: 320px !important;
`;

export const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = css`
  display: block;
  border: 0;
  border-right: 2px solid #777;
  border-top: 2px solid #777;
  width: 12px;
  height: 12px;
  margin: 5px;
  padding: 0;
  background-color: transparent;
  outline: none;
  transition: all .2s;

  &:disabled {
    border-color: #ccc;
    cursor: default;
  }

  &:hover:not(:disabled) {
    border-color: #007eff;
  }
`;

export const ButtonBack = styled(ButtonBackOriginal)`
  ${Button}
  transform: rotate(-130deg);
`;

export const ButtonNext = styled(ButtonNextOriginal)`
  ${Button}
  transform: rotate(45deg);
`;
