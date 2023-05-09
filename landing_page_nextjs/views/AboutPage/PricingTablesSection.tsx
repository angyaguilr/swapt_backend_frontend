import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle></SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="How Swapt Works"
          description="With Swapt, you can browse for furniture items listed by the current tenants of your next apartment or home. On top of that, you can buy single or bundled furniture pieces directly on our site."
          benefits={['Add your images and items to your account.', 'Bundle them together to create your listing.', 'Wait for the incoming tenant to make an offer and done.', 'Moving solved.']}
        >
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;