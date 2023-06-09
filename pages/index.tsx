import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
        name="With Swapt, you can browse for furniture items, and buy single or bundled furniture pieces directly on our site"
        content="Whether you are moving in or moving out, Swapt has the solution to help you stress less."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/selling.svg" title="Innovating the way you move" overTitle="sit amet gogo">
            <p>
            With Swapt, you can browse for furniture items listed by the current tenants of your next apartment or home. On top of that, you can buy single or bundled furniture pieces directly on our site.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/buying.svg" title="Avoid the stress of moving"  overTitle="lorem ipsum" reversed>
            <p>
            Moving sucks. Avoid the heavy lifting, expensive moving companies and storage lockers, and the insane stress of the moving-process with Swapt.{' '}
              <strong>Are you ready to sit back, relax, and let your listing do the moving for you?</strong> It&apos;s simple!
            </p>
            <ul>
              <li>Add your images and items to your account.  </li>
              <li>Bundle them together to create your listing. </li>
              <li>Wait for the incoming tenant to make an offer and done. Moving solved. </li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
