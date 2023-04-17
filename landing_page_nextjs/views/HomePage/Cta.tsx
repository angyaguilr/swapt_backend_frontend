import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <SectionTitle>Ready to move into a new home?</SectionTitle>
          <Description>
            Whether you are moving in or moving out, Swapt has the solution to help you stress less.
          </Description>
          <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Sign Up with Email<span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
              Learn How Swapt Works <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--text), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--text));
  text-align: center;
  align-items: center;
  justify-content: center;
  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }
  ${media('<=tablet')} {
    text-align: center;
    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--text));
  color: rgb(var(--text));
  background: rgb(var(--secondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;