import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/AboutPage/FaqSection';
import PricingTablesSection from 'views/AboutPage/PricingTablesSection';

export default function AboutPage() {
  return (
    <Page title="About Swapt" description="Swapt is a modern marketplace designed to help college students find their next home by eliminating the stress associated with the moving process.">
      <Wrapper>
        <PricingTablesSection />
      </Wrapper>
      <Wrapper>
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;