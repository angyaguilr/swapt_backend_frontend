import NextImage from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import BasicCard from 'components/BasicCard';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';

const TABS = [
  {
    title: 'Moving in',
    description:
      '1. Search for your next apartment',
    imageUrl: '/demo-illustration-3.png',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Moving out',
    description:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.</p>',
    imageUrl: '/demo-illustration-4.png',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
];

export default function HowItWorksGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <Collapse isOpen={isActive} duration={300}>
      <TabContent isActive={isActive} key={idx}>
      <CustomAutofitGrid>
        {TABS.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </TabContent>
    </Collapse>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <HowItWorksGalleryWrapper>
      <Content>
        <OverTitle>features</OverTitle>
        <SectionTitle>How It Works</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup} </TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </HowItWorksGalleryWrapper>
  );
}

const HowItWorksGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  flex-direction: column;
  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-right: 4rem;
  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const TabContent = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);
  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }
  p {
    font-weight: normal;
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 6.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 1.6rem;
  font-weight: bold;
  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  h4 {
    flex: 1;
    white-space: nowrap;
  }
`;


const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);
  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }
  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;