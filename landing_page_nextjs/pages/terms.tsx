import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Swapt Terms and Conditions">
      <CookiesPolicyContainer>
        <RichText>
          <p>
          Welcome to Swapt, an online marketplace where users can create listings and purchase other user's listings. 
          These terms and conditions (the "Agreement") outline the terms and conditions governing your use of Swapt's website, 
          services, and platform (collectively, the "Services"). By using the Services, you agree to be bound by this Agreement.
          </p>
          <br />
          <strong>
          1. Use of the Services </strong>
          <p>
            You may use the Services only in accordance with this Agreement and all applicable laws and regulations. You must be at least 18 years old to use the Services. By using the Services, you represent and warrant that you are at least 18 years old.{' '}
          </p>
          <strong>
          2. User Content </strong>
          <p>
          You are solely responsible for any content you post on the Services, including but not limited to listings, images, and descriptions (collectively, "User Content"). You represent and warrant that you have the right to post all User Content and that the User Content does not infringe any third-party rights. Swapt has the right, but not the obligation, to review, edit, or remove any User Content at its sole discretion.{' '}
          </p>
          <strong>
          3. Transactions </strong>
          <p>
          Users may create listings for items they wish to sell or trade, and other users may purchase or trade for those items. Swapt is not a party to any transaction between users, and is not responsible for the accuracy of any listing or the quality of any item. Users are solely responsible for any transactions they enter into with other users.{' '}
          </p>
          <strong>
          4. Swapt Fees </strong>
          <p>
          Swapt charges a fee for completed transactions, known as a "Swapt." The Swapt fee is calculated as a percentage of the total transaction value, as determined by Swapt in its sole discretion. The current Swapt fee rate is 15% of the total transaction value. Swapt reserves the right to change the Swapt fee rate at any time without notice. By using the Services, you agree to pay the Swapt fee to Swapt for each completed transaction. The Swapt fee will be deducted from the total transaction value before any funds are disbursed to the seller. You understand and agree that Swapt has the right to withhold any funds in the event of a dispute or investigation of fraudulent or illegal activity.{' '}
          </p>
          <strong>
          5. Payment Processing </strong>
          <p>
          Swapt uses Stripe as its third-party payment processor to process all transactions. By using the Services, you agree to be bound by the terms and conditions of Stripe. You understand and agree that Swapt is not responsible for any errors, delays, or other issues that arise from the use of Stripe, and that any payment disputes must be resolved directly with Stripe. Swapt reserves the right to change its payment processor at any time without notice.{' '}
          </p>
          <strong>
          6. Prohibited Activities </strong>
          <p>
          You may not use the Services to engage in any illegal or fraudulent activity, or to post any content that is defamatory, abusive, or otherwise objectionable. Swapt reserves the right to remove any content that violates this Agreement.{' '}
          </p>
          <strong>
          7. Intellectual Property</strong>
          <p>
          Swapt retains all right, title, and interest in and to the Services, including all intellectual property rights. You may not use any Swapt intellectual property without Swapt's prior written consent. {' '}
          </p>
          <strong>
          8. Disclaimer of Warranties </strong>
          <p>
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY WARRANTY FOR INFORMATION, SERVICES, UNINTERRUPTED ACCESS, OR PRODUCTS PROVIDED THROUGH OR IN CONNECTION WITH THE SERVICES, INCLUDING WITHOUT LIMITATION THE SOFTWARE LICENSED TO YOU AND THE RESULTS OBTAINED THROUGH THE SERVICES. SPECIFICALLY, WE DISCLAIM ANY AND ALL WARRANTIES, INCLUDING WITHOUT LIMITATION: 1) ANY WARRANTIES CONCERNING THE AVAILABILITY, ACCURACY, USEFULNESS, OR CONTENT OF INFORMATION, PRODUCTS OR SERVICES AND 2) ANY WARRANTIES OF TITLE, WARRANTY OF NON-INFRINGEMENT, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THIS DISCLAIMER OF LIABILITY APPLIES TO ANY DAMAGES OR INJURY CAUSED BY ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS, COMMUNICATION LINE FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, ALTERATION OF, OR USE OF RECORD, WHETHER FOR BREACH OF CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, OR UNDER ANY OTHER CAUSE OF ACTION.{' '}
          </p>
          <strong>
          9. Limitation of Liability </strong>
          <p>
          IN NO EVENT SHALL SWAPT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF SWAPT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.{' '}
          </p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
