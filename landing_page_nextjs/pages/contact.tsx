import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page title="Contact" description="Minim sint aliquip nostrud excepteur cupidatat amet do laborum exercitation cupidatat ea proident.">
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