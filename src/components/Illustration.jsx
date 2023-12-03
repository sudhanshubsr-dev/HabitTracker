import React, { useState, useEffect } from 'react';

export default function Illustration() {
    const illustrations = [
        { image: "https://lh3.googleusercontent.com/pw/ADCreHeev27cBlZrs-_IpfA8W5ZuY1oF6tbulw_ysnk6UgbMUvLDRT38cTspkdX4FjoZdKE5e2m4Y0C1mWl9_78CU04TOS5tr-KfWzX0NI52IeAmPEWdU01YXONLyuP5i9dUxI8AcytcvV8oDHRC3SavTRxHKhmDyN5m27HfCoh3ARlJl9KTqTqsVCurVfSZznA9u0sfADn6lCJJASwcqFvD90ClrBP1LtKOXmDtFIiyYYKnm4MVIGgrzoAWiHORVXPctdZK5QM6hj5nUjLplVLNEar8UOq-SBhfQRuTdDy5CrKOxIVY0rzinVQxW9edLOV2wzYbkmsFRSxY0349JwZ3yIvsTWbnIRAwu32b3oybtjj_LaQEhr82XEYw2Ta2r5qBoUXslw7D8gD4fQ5D_KcY-8NBofLzhEueQViQFuJDppyeRw3Gew5cvBZRTXWwZmTqULhzuCkKq9i8H_kAT51vidVmanlPhixDkL38r71Iud9NZi5XcPd5cBCZ8DKdOjfMK9o4Qp6Lc_FS2du7ebNa7TmUFsEVlce9TdgyPDHZdwxCqOysWLHsO36IhBEjmHCUpmHxS2pjgUnX6cct8e7OcHzm9-WaVm6dTZcWY636h644QpSuyiyk56M5e1RXlxRGN-h1IkJPbJnBDMaF0KwESLm_6kgFxVsEK5GSue7WqgJ2qs5mDCg_y8ZXcQGlwOGXZ7DBqV0pMALVFBzJvNVpDJRghBwxLplDDeFmcBFVAoXKlqR5Gfo9CzUjYa71AUgrlYwHNPtJXqIpWHORhI82x7YRIcCSDhMxHGcXD1DSW2UiDA-tvprhNdA52StOzzqhIiwW60K8NRnGo_QYaYdq5ua7oZGEoW85XHisB0qq0c6wg-eu-ZBxXO9-_cz-5XgfV1FOnkeM68ej2iGD45DuOh3dioJAwXbxsYVIA6rQE3i-unmImbqTV3oLhKdeNI4rq6YpKB03FpQhdZU=w1276-h958-s-no-gm?authuser=0" },
        { image: "https://lh3.googleusercontent.com/pw/ADCreHdKVgKAJcM0ZKQAsSRSWGPPPfh2E98oLubmmQJ2zzLZFR4kjSuhVBPHCAKytvS0qReSu8igCF5ECoJP42_hi5pLPSdnHOioiP3cmziBQGox3d9YWQqsvYGWYeQBb23IMvtwtK-0LyMAHOzgD454Wi_9k_yMu56ur6Mw0H6TnTPLm4SkunzoevnL-zmuinZT8C5vPVHLJC_zy560Lp-_e2GSXuJd_y4up5p-aYT66M0F-rK2wbDqu9SndEND4FHv-cDWfLetUHFBPH8x7WJKRxlBjXGTN6b_m0e2Sc9xN1SML1sKdoDQdBNnuwTIlywpSZtpmoN-pUS_G-cBjnPg5hsg5R19q_sTNdqsd-0SJpPUHFAlA1HoI5KErfCl2-PeZvnTYd0Kuc4kcd5oGFVLWpMWeWZkOJzz7IxKPNXYtSRKx89QMnm4g6yf_Sfv2i_wUiGXdIpdEetTrwBkFY8uRHPdxnob4smJjYsR4z5IzdODnI-GnVUJRpVJskbT5aQVwxFAOpJdwXy2SvTHPEtGGvpyzUCLy6uioDt6TNexEZLjZufMeUdNnYKvkUUx6rJTqu9nu5f6LUaokoqdzYDA1ATkIKSqwIErE72sjpBkY5SPDLS3aunNv06L-6JgUeNRE7ciaX6FZw2bEFsO5cxVG-zC1L5XqJrHTRCSKsA_IuGrqvaVcQ3BBHznzHK4kBmEsmD8lfI35Sk0CwT0gAzo_ZtYSjuZ-N47IUh3ad3tQYZkVY4PA5RgkfTcjgirCJ0BAjHgxeyvs1n79lqZhWAmXvlazz98R6ZpQATu9zBxGvQhiiYcLExumdAe6dabZzKRx7s_mrW9TFp0LUBqavaTQihYLbQFCPgCEMF-BT0nUj7y5YXD4Li6jh0aj7Tj8lZDdsVPDhPPWCZagPzjSxxF6fExEfRXVAukJlbzFtthSSAlUzphqM0fTX3Ll8srzGuSCwFs2rNQZV9nZbI=w1276-h958-s-no-gm?authuser=0" },
        { image: "https://lh3.googleusercontent.com/pw/ADCreHfNQx7TZPCN3BPbsVpxnCIb150i5wmuMVOWBf2kYdb5G-H8KTo3hvQ3ghqC9n-iyDuRjb4si9Zg9-OS5RMEnq6n1y9oBOdLvCQ9Kl3L-7cXR437Ht_VdsJ5MsPHnDx7d4hWtDAbi7dqHwCdTEVT9Zy7r496RZqxnu2ZAz7E1pQInWpxtNPdG6szV_9euHtvWNS6FSOHa2IlPs7r7XbUs8tqdPEcDqQsgiNiW0A9kucMhvcfWGD4ryn01SoFSFBUX4LDWI_FOBlmT2VnCPXblArNc9LSvWgT8gRCk5wNgTt_g4e_-ZKmxCyIqqttit563h-wWr688jlpMFw8FD8zvGsgufu6fCd93wzZvTZZo3MUmqySbGqnoCK1cLdsMTEH_LTuGs518z58LnZjU08ajCMJShk29TUaGH-e9jIlpowFboQTimxTZUGx4KzRD7X-aorgfV-mmMKJNM6OWGyeuxNG1qSCbOItQZAaa1s6Q7Wc-k_YQuHuEUMhSSpgxzJnjypJUYB1MK7CLMPTZZlPIX5kIUpyp1ZASPI5CPzuIgq_dtZCR2eUAyoP5dM4o0mVVcVbXX5-wzSMD03eloM283AZhtQ6xNNi-I4gKRYMNr2iRoGCe20WXUlIRHkPKUSl7r5IeDViLfMMaOd56lzRaPP8bcdEIv4S1lX9XajafOT1flqXzvsIv3sniOMJTcMlFj53IBXN_c-i-u_0q-ZUNkscgnGVYsiJSc_sRD_PebotbOlo-KCoLaekvc36TyONdJJ68n2b3umdDfw3KqogUz0EDXJP0c6LNMl7qqhROx858g9veIBLXSoCxHAIQILOfDk5_AAYqZ9LoBdfPZb9allrvOM6PYhpzM34KdZEh2jC0Pr6nEEIpUwXf6nG8vZkYYcxqb2ZeQRTPWBiZkvroKWV6JvP0h7f2iHq_O2JKqTUb654xyhvsAh30bHdred9Vwc6AHXe4gOoIu8=w1276-h958-s-no-gm?authuser=0" },
    ];

    const [currentIllustrationIndex, setCurrentIllustrationIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Update the current illustration index and loop back to the beginning if at the end
            setCurrentIllustrationIndex((prevIndex) => (prevIndex + 1) % illustrations.length);
        }, 2000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }, [currentIllustrationIndex, illustrations.length]);

    return (
        <>
            <div className="illustration overflow-hidden">
                {/* Render the current illustration */}
                <img
    src={illustrations[currentIllustrationIndex].image}
    alt="image"
    style={{
        width: '50%',      // Set a relative width
        position: 'absolute',
        left: '50vw',       // Set a relative left position based on viewport width
        top: '10rem'        // Set a fixed top position
    }}
/>

            </div>
        </>
    );
}
