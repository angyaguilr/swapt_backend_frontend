import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is a Swapt?">
      A Swapt is a listing of a tenant’s large furniture and miscellaneous items that they wish to pass on to the incoming tenant.
      </Accordion>
      <Accordion title="What fee does the Swapt Marketplace take for a Swapt?">
        Swapt Marketplace takes a 15% fee for every swapt listing.
      </Accordion>
      <Accordion title="What do you mean “wait for your property manager to verify the transaction”?">
      We work with property managers to protect our users; they will complete a walk through of the apartment at move-out to verify that the transaction is as it says it is to protect against fraud.
      </Accordion>
      <Accordion title="What if the seller does not leave the furniture behind when they move out?">
        The transaction will be voided, the money will be sent back, and the user that broke our terms of service will be penalized. 
      </Accordion>
      <Accordion title="What do I do if my property manager isn’t already partnered with Swapt?">
        We have a property manager registration form which they can fill out, they can also reach out directly to help@swaptmoving.com.
      </Accordion>
      <Accordion title="What is the payment processing system?">
      The Swapt Marketplace uses Stripe.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;