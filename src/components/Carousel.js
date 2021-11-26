import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Carousel = ({children, multiple, onClickNextBtn, onClickPrevBtn}) => {
    const carouselRef = useRef();
    const slideRef = useRef();
    const [isMultiple, setIsMultiple] = useState(false);        // 다중 슬라이드 여부
    const [itemOffSetWidth, setItemOffSetWidth] = useState(0);  // 슬라이드 한칸 너비
    const [translateX, setTranslateX] = useState();             // 이동시킬 슬라이드 x좌표 위치
    const [slideBtnActive, setSlideBtnActive] = useState();
    const [itemElements, setItemElements] = useState([]);

    useEffect(()=>{
        setIsMultiple(multiple);
        sliceElements(children);
    },[]);

    useEffect(()=>{
        const slider = slideRef.current;
        const items = document.querySelector(".slide-items").children;
        if(items.length>0){
            if(isMultiple){
                setItemOffSetWidth(0);
                setTranslateX(items[0].offsetWidth);
            }else{
                setItemOffSetWidth(items[0].offsetWidth);
                setTranslateX(items[0].offsetWidth);
            }
        }else{
            setTranslateX(0);
            setItemOffSetWidth(0);
        }
    },[itemElements]);

    const drawSlideBox = useCallback(() =>{
        let slideBoxs = [];
        slideBoxs.push(
            itemElements.map((el, index) =>{
                return <BoxContainer key={`box-${index}`}>{el}</BoxContainer>
            })
        );
        return slideBoxs;
    },[itemElements]);

    const sliceElements = (elements) =>{
        let ArrEl = [];
        elements.map((el) => {
            ArrEl.push(el);
        });
        setItemElements([...ArrEl]);
    };

    const handleNextBtnClick = useCallback(() =>{
        setSlideBtnActive('next');
        const slider = slideRef.current;
        slider.style.transform = "translate(-"+translateX+"px, 0px)";
    },[translateX]);

    const handlePrevBtnClick = useCallback(() =>{
        setSlideBtnActive('prev');
        const slider = slideRef.current;
        slider.style.transform = "translate("+translateX+"px, 0px)";
    },[translateX]);

  return (
      <Wrap ref={carouselRef}>
          <Container>
            <div class="slide-btn">
                <NextBtn onClick={handleNextBtnClick}><div class="slide-btn-icon"><BsChevronRight/></div></NextBtn>
                <PrevBtn onClick={handlePrevBtnClick}><div class="slide-btn-icon"><BsChevronLeft/></div></PrevBtn>
            </div>
            <SlideNavigator></SlideNavigator>
            <SlideContainer isMultiple={isMultiple} childOffSetWidth={itemOffSetWidth}>
                <div class="slide-items" ref={slideRef}>
                    {drawSlideBox()}
                </div>
            </SlideContainer>
          </Container>
      </Wrap>
  );
};

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;        
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    .slide-btn{
    }
`;
const NextBtn = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 15px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0 0 5px 3px rgb(182 182 182 / 30%);
    position: absolute;
    top: 50%;
    right: 0px;
    margin: 5px;
    z-index: 5;
    .slide-btn-icon {
        line-height: 32px;
    }
`;

const PrevBtn = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 15px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0 0 5px 3px rgb(182 182 182 / 30%);
    position: absolute;
    top: 50%;
    left: 0px;
    margin: 5px;
    z-index: 5;
    .slide-btn-icon {
        line-height: 32px;
    }
`;

const SlideNavigator = styled.div`
`;

const SlideContainer = styled.div`
    .slide-items{
        display: flex;
        color: ${props => props.color};
        left: 0;
        transition: 1s;
    }
`;

const BoxContainer = styled.div`
    & > div{
        box-sizing: border-box;
        flex-shrink: 0;
        ${props => { 
            if(props.active === 'next') {
                css``
            }else if(props.active === 'prev') {
                css ``
            }
        }}
        ${props => props.isMultiple
            ? ''
            : css`margin-right:  calc(100% - ${props => props.childOffSetWidth}px)`
        }
    }
`;
export default Carousel;
