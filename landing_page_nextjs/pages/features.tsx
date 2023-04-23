import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: '1',
    description:
      'Add your furniture/items to your account',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: '2',
    description:
      'Create your Swapt listing​',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: '3.',
    description:
      'Wait for an offer',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Why Swapt?" description="Swapt is innovating the way you move">
      <Wrapper>
        <FeaturesGallery />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
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