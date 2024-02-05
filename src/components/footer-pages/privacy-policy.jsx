import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const styles = {
    pargStyle: 'text-start mt-5 text-[.95rem]',
    smallStyle: 'text-start mt-5 text-[.9rem] font-medium'
  }

  return (
    <div className={`flex justify-center`}>
      <div className={`max-w-[1300px] mt-10`}>
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
          email address: <Link className='underline text-blue-700'>CustomerCare@RiyadhBus.sa.</Link>
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
        <ul className='ps-10'>
          <li className='mt-4'>
            a. remember that you have visited us before, which allows us to identify the number of unique visitors
            we receive. This allows us to make sure we have enough capacity for the number of users that we get
            and to; customise elements of the promotional layout and/or content of the pages of the App; and
          </li>
          <li>
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
      </div>
    </div>
  )
}

export default PrivacyPolicy