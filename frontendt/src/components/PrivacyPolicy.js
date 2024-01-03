// PrivacyPolicy.js

import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const PrivacyPolicy = () => {
  // Animation configurations
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const slideIn = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(50px)' },
    config: config.slow,
  });

  const staggeredFadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  // Animated styles for paragraph and header
  const paragraphStyles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.stiff,
    delay:600,
  });

  const headerStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
    delay:600,
  });

  return (
    <animated.div className="container absolute bg-black text-green-400 p-8 rounded-lg shadow-lg" style={fadeIn}>
      <animated.h1 className="text-4xl font-bold mb-4" style={{ ...slideIn, ...headerStyles }}>
        Privacy Policy
      </animated.h1>
      <animated.div className="privacy-text" style={slideIn}>
        <animated.div className="prose" style={staggeredFadeIn}>
          <animated.p className="mb-4 text-white text-sm font-semibold" style={paragraphStyles}>
            This privacy policy applies to the use of our website and services.
          </animated.p>
          <animated.h2 className="text-2xl font-bold mb-2" style={{ ...slideIn, ...headerStyles }}>
            Information We Collect
          </animated.h2>
          <animated.p className="mb-4 text-white text-sm font-serif" style={staggeredFadeIn}>
            We collect information when you register on our site, place an order, subscribe to our newsletter, or fill out a form.
          </animated.p>
          <animated.h2 className="text-2xl font-bold mb-2" style={{ ...slideIn, ...headerStyles }}>
            How We Use Your Information
          </animated.h2>
          <animated.p className="mb-4 text-white text-sm font-serif" style={staggeredFadeIn}>
            We may use the information we collect to personalize your experience, improve our website, process transactions, and send periodic emails.
          </animated.p>
          <animated.h2 className="text-2xl font-bold mb-2" style={{ ...slideIn, ...headerStyles }}>
            Security
          </animated.h2>
          <animated.p className="mb-4 text-white text-sm font-serif" style={staggeredFadeIn}>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </animated.p>
          <animated.h2 className="text-2xl font-bold mb-2" style={{ ...slideIn, ...headerStyles }}>
            Third-Party Links
          </animated.h2>
          <animated.p className="mb-4 text-white text-sm font-serif" style={staggeredFadeIn}>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
          </animated.p>
          <animated.h2 className="text-2xl font-bold mb-2" style={{ ...slideIn, ...headerStyles }}>
            Changes to Our Privacy Policy
          </animated.h2>
          <animated.p className="mb-4 text-white text-sm font-serif" style={staggeredFadeIn}>
            If we decide to change our privacy policy, we will post those changes on this page.
          </animated.p>
          <animated.p className="font-sans text-gray-400" style={staggeredFadeIn}>
            Address: 123 Privacy Lane, Confidential City
          </animated.p>
        </animated.div>
      </animated.div>
    </animated.div>
  );
};

export default PrivacyPolicy;
