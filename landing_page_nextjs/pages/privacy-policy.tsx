import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
          This Privacy Policy describes how Swapt ("we" or "our") collects, uses, and shares your personal information when you visit our website at swaptmoving.com (the “Site”) or use our services.
          <br />
          <br />
          <strong>PERSONAL INFORMATION WE COLLECT  </strong><br />

We automatically collect certain information about your device when you visit the Site, such as your web browser, IP address, time zone, and cookies. We also collect information about the web pages or products that you view, the websites or search terms that referred you to our Site, and how you interact with our Site. We use various technologies such as cookies, log files, web beacons, tags, and pixels to collect this information.

When you make a purchase through the Site, we collect your name, billing address, shipping address, payment information (including credit card numbers or other payment types accepted), email address, and phone number. We also collect any other information that you voluntarily provide to us, such as your product preferences or reviews. We refer to this information as “Order Information.”

<br /><strong>HOW DO WE USE YOUR PERSONAL INFORMATION? </strong><br />

We use the Order Information to process your payment information, better your user experience, and provide you with invoices and/or order confirmations. We also use this information to communicate with you, screen orders for potential risk or fraud, and provide you with information or advertising relating to our products or services when in line with your preferences.

We use the Device Information to help us improve and optimize our Site, generate analytics about how our customers browse and interact with our Site, and assess the success of our marketing and advertising campaigns.

<br /><strong>SHARING YOUR PERSONAL INFORMATION </strong><br />

We share your Personal Information with third-party service providers that help us use your Personal Information, as described above. For example, we use Google Analytics to understand how our customers use the Site. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.

<br /><strong>BEHAVIOURAL ADVERTISING </strong><br />

We use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. You can opt-out of targeted advertising by visiting the opt-out links provided by the services being used.

<br /><strong>YOUR RIGHTS </strong><br />

If you are a European resident, you have the right to access your personal information, request that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information provided below.

<br /><strong>DATA RETENTION </strong><br />

We retain your Order Information for our records unless and until you ask us to delete this information.

          </p>
          <br />
          <strong>
          If you have any questions or concerns about our Privacy Policy, please contact us at [help@swaptmoving.com].{' '}
          </strong>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;