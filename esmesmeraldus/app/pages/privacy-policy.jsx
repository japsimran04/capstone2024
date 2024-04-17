import React from "react";
import "../styles/policies.css";

const PrivacyPolicy = () => {
    return (
        <div className="center-wrapper-policies">
            <div className='policy-page-edit'>
            <h1 className='title-policies'>Privacy Policy</h1>
            <p className='description-policies'>This Privacy Policy outlines how esmeralduscoffee.com (referred to as the “Site”) collects, uses, and shares your personal information when you visit the website or make a purchase.</p>
            
            <h3 className='h3-policies'>1: Personal Information Collected:</h3>
            <p className='description-policies'>We automatically collect information about your device when you visit the Site, including your web browser, IP address, time zone, and certain cookies installed on your device. We also collect information about the pages and products you view, search terms and websites that referred you to the Site, and how you interact with the Site. This collected information is referred to as “Device Information”. We use cookies, log files, web beacons, tags, and pixels to collect Device Information. Additionally, we collect your name, billing and shipping address, payment information (including credit card numbers), email address, and phone number when you make a purchase through the Site. We refer to this information as “Order Information”. Personal Information refers to both Device and Order Information.</p>

            <h3 className='h3-policies'>2: Use of Personal Information:</h3>
            <p className='description-policies'>We use Order Information to fulfill orders, process payment information, arrange shipping, provide invoices and order confirmations, communicate with you, screen for potential risk or fraud, and send you information or advertising about our products or services. We use Device Information to screen for potential risk and fraud, improve and optimize the Site, and generate analytics on customer browsing and interaction.</p>

            <h3 className='h3-policies'>3: Sharing of Personal Information:</h3>
            <p className='description-policies'>We share Personal Information with third parties to help us use it for the aforementioned purposes. For example, we use Shopify to power our online store and Google Analytics to understand how customers use the Site. We may also share Personal Information to comply with applicable laws and regulations or respond to lawful requests for information, or to protect our rights.</p>

            <h3 className='h3-policies'>4: Behavioral Advertising:</h3>
            <p className='description-policies'>We use Personal Information to provide targeted advertisements or marketing communications we believe may interest you. You can opt-out of targeted advertising through the provided links.</p>

            <h3 className='h3-policies'>5: Do Not Track:</h3>
            <p className='description-policies'>We do not alter our data collection practices if we receive a Do Not Track signal from your browser.</p>

            <h3 className='h3-policies'>6: Your Rights:</h3>
            <p className='description-policies'>If you are a European resident, you have the right to access and request correction, update or deletion of your Personal Information. We process your information to fulfill contracts or pursue legitimate business interests. Please note that your information may be transferred outside of Europe, including to Canada and the United States.</p>

            <h3 className='h3-policies'>7: Data Retention:</h3>
            <p className='description-policies'>We retain Order Information unless requested to delete it.</p>

            <h3 className='h3-policies'>8: Changes:</h3>
            <p className='description-policies'>We may update this policy to reflect operational, legal, or regulatory reasons.</p>

            <p className='description-policies'><strong>Contact Us:</strong> For more information, questions or complaints, contact us at <a href="mailto:esmeralduscoffee@gmail.com">esmeralduscoffee@gmail.com</a>.</p>
        </div>
        </div>
    );
}

export default PrivacyPolicy;

