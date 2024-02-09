import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const PrivacyPolicy = () => {
  const styles = {
    pargStyle: 'text-start mt-5 text-xs',
    smallStyle: 'text-start mt-5 text-xs font-semibold',
    linkStyle: 'underline text-blue-700 font-medium mx-2',
    mediaContainer:'w-[100%] pr-[1.5rem] pl-[1.5rem] mx-auto md:max-w-[1110px] md:mx-auto  '
  }

  return (
    <>
      <div className={`flex justify-center`}>
        <div className={`${styles.mediaContainer} `}>
          <h3 className='text-center font-semibold text-[1rem] tracking-tight opacity-90'>
            “darb” CARD AND RIYADH BUS WEBSITE PRIVACY AND DATA PROTECTION POLICY
          </h3>
          <p className={styles.pargStyle}>February 27, 2023</p>
          <p className={styles.pargStyle}>
            For the purpose of these policy, “we”, “us” and “ours” shall always mean the Royal Commission for
            Riyadh City (RCRC) and/or its affiliates, while “you” and “yours” shall mean the user.
          </p>
          <p className={styles.pargStyle}>
            This privacy and data protection policy (“Policy”) takes effect on 01 March 2023. It describes what
            information we hold, why we hold it and how we use it. This Policy applies to anyone who uses our
            website, <Link to='/' className='text-blue-500'>www.riyadhbus.sa</Link> (“Site”), our App (“Riyadh Bus App”) and our
            <span className='font-bold mx-2'>“darb”</span>card. We'll refer to the Site and Riyadh Bus App together
            as the “App”. In this Privacy and Data Protection Policy, references to the App include both Android
            and iOS versions of the App.
          </p>
          <p className={styles.pargStyle}>
            We're the Controlling Authority as defined by the Personal Data Protection Law of the Kingdom of Saudi
            Arabia, issued pursuant to Royal Decree No. (M/19) dated 9/2/1443 AH. If you have any questions about
            this Policy or want to contact our Data Protection Officer, please contact us through the following
            email address: <Link className={styles.linkStyle}>CustomerCare@RiyadhBus.sa.</Link>
          </p>
          <p className={`${styles.pargStyle} opacity-90`}>
            This Privacy Policy is subject to the laws and regulations of the Kingdom of Saudi Arabia. The courts
            of jurisdiction relating to this Policy shall be the Saudi courts.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>1. WHAT INFORMATION DO WE HOLD AND WHY?</p>
          <p className={`${styles.pargStyle}`}>
            There are three types of information we process: (1) information you provide, (2) information created
            when you use features in the App or darb card and (3) information from other sources.
          </p>
          <p className={`${styles.smallStyle}`}>1.1 Information you provide</p>
          <p className={`${styles.pargStyle}`}>
            When you use our App or darb card, you might provide us with (a) personal information; (b) places and
            preferences; and (c) direct communications.
          </p>
          <p className={styles.smallStyle}>1.1.1  Personal information</p>
          <p className={styles.pargStyle}>
            RCRC requires that you provide personal information that is accurate, complete, and up-to-date as is
            necessary for the purposes for which it is to be used while transacting with us.
          </p>
          <p className={styles.pargStyle}>
            If you create a Riyadh Bus App account, you provide us with your name, phone number, email address and
            other personal data which we use to ensure your saved places and other personalisation features are
            synced across your multiple devices.
          </p>
          <p className={styles.pargStyle}>
            When you purchase a QR e-ticket or travel pass within the App, you provide us with your payment details.
          </p>
          <p className={styles.pargStyle}>
            If you register your darb card in your name, you provide us with your name, email address, mobile phone
            number and other personal data so that we can verify your identity. To register your darb card you must
            visit a ticket vending station for an agent to verify your identity using your National ID or Iqama and
            mobile phone number register. We never use this information for any purpose other than verifying your
            identity so we can register your darb card. You also provide us with your payment details to pay for
            your ticket or travel passes as specified in our Terms and Conditions.
          </p>
          <p className={styles.smallStyle}>1.1.2  Places and preferences</p>
          <p className={styles.pargStyle}>
            You may choose to provide us with information on your places and preferences, such as Home, Work,
            Favourites, and other travel preferences. We use this information to develop personalised
            journey-planning services. We may also analyse this data in aggregate to improve the App
            (for example, by ranking certain journey results more highly than others).
          </p>
          <p className={styles.smallStyle}>1.1.3  Direct communications</p>
          <p className={styles.pargStyle}>
            When you communicate with us (for example when you respond to in-App survey questions, report problems,
            raise queries etc.) we may receive information about the type of phone you're using, your service
            provider and, if you've enabled the location permissions in your device, the latitude and longitude
            of your location when you contact us. We may use this information to fix problems in the App, with
            ticketing and purchasing or with darb card, to reply to your communications and to help keep you safe.
          </p>
          <p className={styles.smallStyle}>1.2 Information created when you use our App or darb card</p>
          <p className={styles.pargStyle}>
            The following are types of information generated when you use our App or darb card. We associate this
            information with an installation ID number that is randomly generated each time you install the Riyadh
            Bus App. We may use this installation ID to anonymize the data we collect from you. We do not access
            any permanent device ID numbers.
          </p>
          <p className={styles.smallStyle}>1.2.1 Location information</p>
          <p className={styles.pargStyle}>
            We use the location data described in this “Location Information” section to improve results in the App
            and for the purposes identified below.
          </p>
          <p className={styles.pargStyle}>
            Users of the Riyadh Bus App: if you've enabled your device's location services we may collect and use
            your start location information when you open the App. If you disable your device's location services
            we collect only the start and end points that you search manually.
          </p>
          <p className={styles.pargStyle}>
            Ticketing and purchasing: If you purchase a ticket using the App, we may collect your location
            information when the Riyadh Bus App is running both in the foreground and background of your device
            during your journey. Knowing your location during your ride enables on-trip support.
          </p>
          <p className={styles.pargStyle}>
            In addition to your location data, we store your booking details, the date and time of your journey,
            the amount charged, your origin and destination locations. We use this information for operational
            reasons, such as providing customer support.
          </p>
          <p className={styles.pargStyle}>
            QR E-ticket users: If you are a QR E-ticket user, we will collect your location information as
            described above if you Tap-to-Go service in the Riyadh Bus App while using your QR e-ticket.
          </p>
          <p className={styles.smallStyle}>1.2.2 Device information</p>
          <p className={styles.pargStyle}>
            We may collect information about the devices you use to access our App, including the type of computer
            or device you use, the installation ID of the App on your device, the hardware model, operating system
            and versions, software, file names and versions, the preferred language, time zone settings, and device
            motion information. This information is necessary for us to diagnose bugs and improve the App. We do
            not collect any permanent device ID numbers.
          </p>
          <p className={styles.smallStyle}>1.2.3 Log and usage information</p>
          <p className={styles.pargStyle}>
            Each time you open the App, we may collect information about how and when you use it (such as the time
            and date, searches in the App features and journey results you select, pages visited, app crashes and
            other system activity). We use this information to improve our App in multiple ways. For example,
            fixing bugs preventing future crashes and working out which features our users find most helpful.
          </p>
          <p className={styles.smallStyle}>1.2.4 Cookies</p>
          <p className={styles.pargStyle}>
            The App uses cookies to store certain information. Cookies are pieces of information that a website
            or app transfers to your hard drive or mobile device to store and sometimes track information about
            you. Although they identify a user's device, cookies do not reveal the name, email address or other
            obvious identifiers of users.
          </p>
          <p className={styles.pargStyle}>
            When you visit our App, our server sends a cookie to your computer or mobile device (depending on how
            you access the site or App). A number of cookies we use last only for the duration of your web session
            and expire when you close your App. These are known as “session cookies”. Other cookies are used to
            remember you when you return to the App and will last for longer. These are known as “persistent cookies”.
          </p>
          <p className={styles.pargStyle}>We may use cookies to:</p>
          <ul className='ps-10 '>
            <li className='mt-4 text-xs'>
              a. remember that you have visited us before, which allows us to identify the number of unique visitors
              we receive. This allows us to make sure we have enough capacity for the number of users that we get
              and to; customise elements of the promotional layout and/or content of the pages of the App; and
            </li >
            <li className='text-xs'>
              b. collect information about how you use the App so that we can improve the App and learn which parts
              of the App are most useful.
            </li>
          </ul>
          <p className={styles.pargStyle}>
            Some of the cookies used by our App are set by us and some are set by third-party analytics and
            crash/error-reporting companies as described in this Policy.
          </p>
          <p className={styles.pargStyle}>
            Most browsers automatically accept cookies but, if you prefer, you can change your browser to prevent
            that or to notify you each time a cookie is set. By blocking or deleting cookies you may not be able
            to take full advantage of the Site’s or App's features.
          </p>
          <p className={styles.smallStyle}>1.3 Information from other sources</p>
          <p className={styles.pargStyle}>The App may collect the following types of information from other sources:</p>
          <p className={styles.smallStyle}>1.3.1 Payment information</p>
          <p className={styles.pargStyle}>
            In order to pay for your darb card or QR e-ticket you will need to provide payment information. Apple
            collects credit or debit card (“Payment Card”) data with respect to in-app purchases of QR e-ticket,
            and our payment processor collects Payment Card data with respect to darb card and QR e-ticket
            payments. For darb card and QR e-tickets, you provide your Payment Card information directly to
            Payment Gateway, which processes payments on our behalf. Payment Gateway uses this payment
            information in accordance with its Privacy Policy. Payment Gateway provides us with some limited
            data related to you, such as the last four digits of your card number and expiration date, which we
            use in order to handle operational issues such as subscriber and passenger queries about charges.
          </p>
          <p className={styles.smallStyle}>1.3.2 Cardholder ID and transaction information for darb card</p>
          <p className={styles.pargStyle}>
            If you are a darb card user, we receive a “Cardholder ID” from the third-party company that issues your
            darb card. The Cardholder ID is your unique identifier that tells us which darb card has been issued
            to you. When you use the darb card, we also receive your transaction information from this
            third-party company, including the date, time, amount and the merchant details associated with the
            transaction. This information is necessary in order to provide the darb card service and to comply
            with our legal obligations.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>2. HOW YOUR INFORMATION MAY BE USED AND BY WHOM?</p>
          <p className={styles.pargStyle}>We use the information we collect to:</p>
          <ul className='ps-10'>
            <li className='mt-4 text-xs'>
              a. Provide and improve our App, QR e-ticket services and darb card;
            </li>
            <li className='text-xs'>
              b. Build a profile of your preferences so we can personalise the Riyadh Bus App and provide you with
              relevant transport information;
            </li>
            <li  className='text-xs'>
              c. Recommend transport options that match your stated preferences and previous use of the App;
            </li>
            <li  className='text-xs'>d. Administer your account with us, if you have one;</li>
            <li  className='text-xs'>e. Confirm your eligibility to use darb card;</li>
            <li  className='text-xs'>f. Verify your identity (including processing of your identity documents in order to confirm your identity and to make an automated decision as to whether or not to provide you with darb card services);</li>
            <li  className='text-xs'>g. Process or facilitate payment (through third party payment processing services) for QR e-ticket, and darb card;</li>
            <li className='text-xs'>h. Send you transaction receipts for your use of QR e-ticket and/or darb card;</li>
            <li className='text-xs'>i. Respond to your emails to discuss your use of the App, QR e-ticket, darb card and answer any support queries you may have;</li>
            <li className='text-xs'>j. Send you marketing communications by email or in-App notifications, and let you know about our policies and terms or when we expand services in Riyadh city;</li>
            <li className='text-xs'>k. Identify issues with the operation of the App, and provide crash reports in order to find resolution for performance issues;</li>
            <li className='text-xs'>l. Improve the design, functionality and/or content of the pages of the App and customise them for you;</li>
            <li className='text-xs'>m. Carry out research on users' transport choices to improve the App, and darb card;</li>
            <li className='text-xs'>n. Conduct studies on use of public transit and ridership;</li>
            <li className='text-xs'>o. Disclose to lawful authorities when required to do so by law, or when appropriate, in our opinion, to respond to their request.</li>
          </ul>
          <p className={styles.pargStyle}>
            We work hard to improve the App and add functionality, which we think will make it safer, more fun and
            more useful. New functionality may involve similar or incidental uses of your data to those set out
            above. We regularly review the way we use data and retain the right to amend our privacy policy.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>3. WHAT IF YOU DO NOT WANT TO PROVIDE YOUR INFORMATION?</p>
          <p className={styles.pargStyle}>RCRC may collect your personal information which you have accepted to
            share per this Policy for the purposes described above.  If you do not wish to disclose personal
            information, you may choose to forego the convenience of purchasing tickets with a credit card, on the
            App, or using a darb card. </p>
          <p className={`${styles.pargStyle} font-semibold`}>4. HOW MAY THIRD PARTIES RECEIVE YOUR INFORMATION?</p>
          <p className={styles.smallStyle}>4.1   User Experience & Related Analytics</p>
          <p className={styles.pargStyle}>
            From time to time we may share information with third parties to improve
            the App and enhance user experience. To the extent possible we anonymize (remove information that
            identifies you) and minimize the data we send to them.
          </p>
          <ul className='ps-10'>
            <li className='mt-4 text-xs'>
              a. <span className='underline'>Search Partners:</span> We have search partners like Google, so you can find the places you want to go in the App. They receive the place name you have searched for and to make your search results as relevant as possible, they receive your current location (if you have enabled location services in your device).
            </li>
            <li className='mt-4 text-xs'>
              b. <span className='underline'>Analytics Vendors:</span> We use third party vendors like Google Analytics to understand what you've tapped or clicked on the App. They receive information showing only that someone has tapped or used certain features in the App. They organise that information and give it back to us so that we can make improvements to the App.
            </li>
            <li className='mt-4 text-xs'>
              c. <span className='underline'>Crash/Error Reporting Vendors:</span> We may use vendors to report on crashes you experience with the App so we can fix those, and to report on errors with our backend.
            </li>
            <li className='mt-4 text-xs'>
              d. <span className='underline'>Communication Platforms:</span> To send you transaction receipts for your QR e-ticket and/or darb card subscription and to send you all other emails and update about our services, we use communication platforms.
            </li>
          </ul>
          <p className={styles.pargStyle}>We do not control these vendors and you may wish to consult their
            individual privacy policies for more information.</p>
          <p className={styles.smallStyle}>4.2   Embedded Content</p>
          <p className={styles.pargStyle}>
            We may also embed content from websites such as YouTube or Instagram. As a result, when you visit a
            page featuring such content, you may be presented with cookies in the embedded content from these
            third parties. We do not control these cookies and cannot prevent these sites or domains from
            collecting information on your use of this content. You should check the relevant third-party
            website for more information about them and how to opt out. If you are not logged in to their
            services, they will not know who you are but may still gather anonymous usage information.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>5. WILL YOU SELL MY INFORMATION TO THIRD PARTIES FOR COMMERCIAL PURPOSES?</p>
          <p className={`${styles.pargStyle}`}>
            No, we will not sell your personal information to third parties for commercial or any other purposes.
            We may, from time to time, seek to update and improve the services provided, and invite commercial
            entities to submit proposals for enhanced services. In such circumstances, we may share data collected
            on ridership, but this will not include your personal information.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>6. WHAT ARE YOUR RIGHTS IN RELATION TO PERSONAL DATA WE HOLD ABOUT YOU?</p>
          <p className={`${styles.smallStyle}`}>6.1   Access</p>
          <p className={`${styles.pargStyle}`}>
            You have a legal right to request access to a copy of the personal information we hold about you. In
            order to do this, contact us at <Link className={styles.linkStyle}>CustomerCare@RiyadhBus.sa.</Link> Please use the subject line “PDPP” personal
            data protection policy and include details about what personal information you're looking for. You will
            need to have created an account for us to provide you with your information because without an account,
            we are not able to connect your Installation ID to a verifiable email address. You must have access to
            the email address that you used when you created the account so that we can verify your identity.
          </p>
          <p className={styles.smallStyle}>6.2 Deletion</p>
          <p className={styles.pargStyle}>
            We store your personal information for as long as is necessary to provide our services and products.
            You have the right to request we delete your personal information if you believe that we no longer
            need it for the purposes for which it was provided, or you wish to withdraw your consent (and we have
            no other lawful basis to use the data). For legal reasons, we may not always be able to delete your
            information.
          </p>
          <p className={styles.pargStyle}>If you ask us to delete your personal information by emailing us at
            <Link className={styles.linkStyle}>CustomerCare@RiyadhBus.sa</Link>, please use
            the subject line “Account Deletion”.</p>
          <p className={styles.pargStyle}>
            Note that residual copies may take longer to be removed from our backup systems which cannot be
            immediately overwritten. Where residual copies are kept on our back-up systems, they are merely
            held on the system and are not used for any other purpose. We will keep a record of your request
            to ensure compliance with legal obligations.
          </p>
          <p className={styles.smallStyle}>6.3   Notifications</p>
          <p className={styles.pargStyle}>
            We may send you information we think you may find useful (e.g., new bus line launches, bus route diversions, and alerts about darb card relevant to you) or which you have requested from us by push notification and/or by email (if provided). You can opt-out of receiving further notifications or emails if you wish.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>7. HOW WE KEEP YOUR INFORMATION SECURE</p>
          <p className={`${styles.pargStyle}`}>
            We place great importance on the security of all information associated with our users. We use measures such as encryption, anonymization, information access controls, and firewalls.
          </p>
          <p className={`${styles.pargStyle}`}>
            Keep in mind that submission of information over the internet and mobile networks is never entirely secure. We cannot guarantee the security of information you submit via the App whilst it is in transit over the internet or mobile networks and any such submission is at your own risk.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>8. HOW LONG WE KEEP YOUR INFORMATION</p>
          <p className={`${styles.pargStyle}`}>
            By providing you with products or services, we create records that contain your information, such as customer account records, payment and activity records. We manage our records to help us to serve our users well and to comply with legal and regulatory requirements. Records help us demonstrate that we are meeting our responsibilities and are evidence of our business activities.
          </p>
          <p className={`${styles.pargStyle}`}>
            How long we keep records depends on the type of record, the nature of the activity, product or service and the applicable legal or regulatory requirements. How long we retain your information may change based on business or legal and regulatory requirements. If you are darb card user, we keep most of your data for as long as it is legally required to comply with the law and if we face a legal challenge.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>9. WHAT COUNTRIES WILL YOUR PERSONAL INFORMATION BE SENT TO?</p>
          <p className={`${styles.pargStyle}`}>
            Information that you submit via the App is sent to and stored on secure servers located in the Kingdom of Saudi Arabia. Information submitted by you may be transferred by us to our other offices and/or to the third parties mentioned in the circumstances described above, which may be situated outside the Kingdom of Saudi Arabia.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>10. HOW WILL YOU KNOW ABOUT CHANGES TO OUR PRIVACY POLICY?</p>
          <p className={`${styles.pargStyle}`}>
            We may revise this Policy from time to time. Any changes and additions to this Policy will be posted in the App and are effective from the date on which they are posted. Please review this privacy notice from time to time to check whether we have made any changes to the way in which we use your personal data. This Policy was last updated on 23 February 2023. We retain the right to change this Policy as necessary.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>11. WHAT IF YOU HAVE A COMPLAINT?</p>
          <p className={`${styles.pargStyle}`}>
            We take handling of your information seriously. If you're unhappy about the way we do this, please contact us by email to <Link className={styles.linkStyle}>CustomerCare@RiyadhBus.sa</Link> or call at 19933.
          </p>
          <p className={`${styles.pargStyle} font-semibold`}>12. HOW TO GET IN TOUCH WITH US?</p>
          <p className={`${styles.pargStyle}`}>
            Please submit any questions, concerns or comments you have about this privacy Policy or any requests concerning your personal data by email to our <Link className={styles.linkStyle}>CustomerCare@RiyadhBus.sa</Link> or call at 19933.
          </p>
        </div>
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy