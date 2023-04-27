import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page title="About Us" description="Swapt was founded by Alex and Sam Nordheimer">
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;
  ${media('<=tablet')} {
    flex-direction: column;
  }
`;