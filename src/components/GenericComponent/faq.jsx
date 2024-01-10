'use client';
import React, { useState } from 'react';

const faqData = [
    {
        question: 'Which review sites do you work with?',
        answer: 'We currently work with 80+ review sites.',
    },
    {
        question: 'Can I buy additional email and SMS credits?',
        answer: 'Yes! Email credits are available at $3 per thousand credits, and SMS credits are $15 per thousand credits (US/Canada). Get in touch for pricing in other countries.',
    },
    {
        question: 'Can I add more locations and users to my plan?',
        answer: 'You can manage reviews for 5 locations on the Large plan - beyond that, we charge $15/month per location and can offer volume discounts.<br />Similarly, you can add more users for $10/month per user.',
    },
    {
        question: 'What is the time commitment?',
        answer: 'We dont believe in lock-ins, and thus have no setup fees, our contracts are all month-to-month and you can cancel at any time. With that said, you do have the option to pay yearly to get a 20% discount.',
    },
    {
        question: 'Do you support SMS in my country?',
        answer: 'We support SMS globally, please get in touch to inquire about your specific case.',
    },
    {
        question: 'What kind of support can I expect?',
        answer: 'We have a 100% satisfaction rating on our support from the past 3 months, with replies within 24 hours during week days.',
    },
];
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <>
            <section className='bg-blue-400 py-24 w3l-faq-6'>
                <div className='max-w-[1300px] w-full my-0 mx-auto py-0 px-8'>
                    <h2 className='text-5xl font-bold text-center mb-10 text-black leading-5 mx-auto lg:text-4xl sm:text-3xl'>Frequently asked questions</h2>
                    <div className="faq-pagev">
                        <ul className="sm:block">
                            {faqData.map((faq, index) => (
                                <li key={index} className="sm:w-full">
                                    <h4
                                        className='lg:text-lg sm:text-xl xxs:text-xs'
                                        onClick={() => handleToggle(index)}
                                    >
                                        {faq.question}
                                    </h4>
                                    {activeIndex === index && <p>{faq.answer}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;