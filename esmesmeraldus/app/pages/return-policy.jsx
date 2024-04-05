import React from "react";
import "../Styles/policies.css";

const ReturnPolicy = () => {
    return (
        <div className="center-wrapper-policies">
            <div className='policy-page-edit'>
            <h1 className='title-policies'>Return Policy</h1>
            <ul className='description-policies'>
                <li>We do not accept returns for open coffee bags.</li>
                <li>Products can be returned or exchanged within 30 days of purchase.</li>
                <li>Grinders can be exchanged within 60 days of purchase.</li>
                <li>Items must be returned in their original shape.</li>
                <li>Upon receiving and inspecting your return, we will email you to confirm receipt and notify you of the approval or rejection of your refund. If approved, your refund will be automatically credited to your original method of payment within a certain amount of time.</li>
                <li>Sale items are non-refundable.</li>
                <li>To initiate a return, please email <a href="mailto:esmeralduscoffee@gmail.com">esmeralduscoffee@gmail.com</a> for instructions. You are responsible for paying your own return shipping costs, and shipping fees are non-refundable. If you receive a refund, the cost of return shipping will be deducted from it.</li>
                <li>The time it takes for your exchanged product to reach you may vary depending on your location.</li>
                <li>For items over $80, please use a trackable shipping service or purchase shipping insurance to ensure that we receive your returned item.</li>
            </ul>
            <p className='description-policies'>We reserve the right to refuse any returns that do not meet our return policy requirements.</p>
            <p className='description-policies'>If you have any questions or concerns regarding our return policy, please do not hesitate to contact us at <a href="mailto:esmeralduscoffee@gmail.com">esmeralduscoffee@gmail.com</a>.</p>
        </div>
        </div>
    );
}

export default ReturnPolicy;