import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page title="Contact" description="For any questions, please contact us!">
      <ContactContainer>
        <InformationSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;
  ${media('<=tablet')} {
    flex-direction: column;
  }
`;