import React, { useEffect, useState } from 'react';

export default function Illustration() {
    const illustrations = [
        { image: "https://lh3.googleusercontent.com/pw/ADCreHcm3aYQ_rzAKd8asYzW6E2WqYKApq9SkODJ0EaSTi4DGzsLjN54_htYN8qLbxfA3ROVjTUPT279cgFj43NvBVTWPewVWieDM4EYKRdNWUS948ZqXx2hELRMfUNJHI18KbG1ydJGLLwiYgGrzqxuo9Am0wv_oohytoMPh63ifK9UmwytUmyUvomJgBqnGyuIwK3dRbT54B34nYkTqynDfkQO8x5qd1XF5w4qbsrP1bv8YtbuY_AU_iXjV0cUJ4-22LGiOyQ5cif4_eAeWDUwT9w0wwNFOBXRbDR5ZQ-LFpbsNybsjTj7ePskUh_iNOj9KZ5KesEIiOTqz1ZvYNvY5fbura3fRCLonF6Uz83rdQewIlkiFTHKYV0Qyq1jCgaA2NMZL_xeR9PnXSv4TFY1qnGKVLwqGBAHrqEs5jfK9uw3ejm6QyWIf7NK2Hy41mZ4JvmrH8nWEmsHMwiPoWJ0t7xTLajTJM5ZPbpfuQa6lGI_mdlx26nmY3Re6eKvhjxZ_-aCvD72FpQA7EctwLpaetH_KCNnvqsQVJ1JUcEyP24QFTeSYz7DjvOzBj9mLA-AmAv-8qlKlbkWuqZwAxLIilNJ4L5-WZBDs5FagNn36db5UYwKyee4h-IvXzVL9-m_XLlxHX1s5xEXjMhBnDrZuHaQNht8W_HZKy5QVjTU73C6JZ5W9pT9EkPzqGO2qDjfcM--XCE2r2L4hmFfWaNeCjmal28JjgLu3rbXDc2ZjuSfzTkGSIPp0XjaOJdC3EWbYScFPdYCGG6uGLv7qr-4GTTkqA3DN3q85eWsd71e5RHDPC-7voyil-6aipZpug26H8LkArAHH6tAGowruh-DCQ_QS2zVPTIgy6-3X3fbpvoHBj0-iqC8WvkErsOtQdBFkwy3c98Th8GWiDOjlySTOgZq8GEdWKpsiFzV0OS9TRJmFjZ62DMuNIFv3jdLIChjbX2hSVBkMhQ8Em1dyw-4sUd6zsr9jlhVedRAW3F_5-DDz_ZXhw=w1238-h928-s-no-gm?authuser=0" },
        { image: "https://lh3.googleusercontent.com/pw/ADCreHfC2lT706pmcyjX-ecLJqqIfGw12o6gUcuqkQIV8vcfOijfIGng4-d67Da1c9yfEwbztsIedkPhdBe5Z8KuhXVJssDNH1kCa29s4TAHEr7Ih9c_r8LMFjr56wRCODNapGDvG7sZyjzgx1dDWH7vGw4E5Dbcq9CF88cfXuGwODaS6a2tOlGgKfFpU3balhZq-7_ns6i6b7mfX0nchD96NRlbhwmsjFM-_n5hNzvqKmNc9ik6PugCED6d6Oocfe6pS4qFqt8meL_JxrMl69K-uf6uXnRXxOYkuEEegSlZTP5DnKPVv-aZMeCa973PiM9jil4gVdDqRFDtajAmFy8CXPtFheBQpo0LRREXkA70036G0vgKrcoh1VTd0G-ut8SRrvrc2tIO1Mw88CqLt3dbW5R5VjMRGqUkakwgSPfvLQpRjDqm2xqC9fn5KSmMSNp0lQzri0k8RtVuSdtxgUgBkUIbZCR5zD5Vl8PmCF8sU8P-S4vHl81WteehgGL4JuiXeovkJBxjj8JYLmjnOcTqq1ThSNVYoUT4c4Fc3MrV2O7EBZMhf6JhoLA8mGG9xY0wpXoA_IIOsos8I_WBXX4NgBFwni9o8c0mAa6CIj1IGVcN74nq6zEb95Yi5Woy9_oaBjlNdWgWByUpcV8r1JJ_7WsVUkr8uldVR1GZNdFI2xdD2plHv46MdvO2IT_IzpuAVoTBEM18Ve2fXrkqKiTrmOe4YXe84CRbCBwtmSN_7JJudrQ87Z6v-__KKmldALjzYISk5lSeOr1oXfBWWafMV1kbUHTyjtT8b9hUJUOFCtjRHgi-qLJyBitoioYEGyUuI6bBoPCTnep0t7K90Kh7y5evrT6hncPxwJ72b-npDUcF1q9MdUGkYvM9mMEGii5PPPtwU90tz76Po_74j1tnWdz9kVw-0Nm2pTmr9TROP9p9XmRlzM8xkDPoVLg7swNd4cKDQuFUWoK8O2ChMpW12z26ABPO-JSi8xT02RX1vZu8VmUIAQ=w1238-h928-s-no-gm?authuser=0" },
        { image: "https://lh3.googleusercontent.com/pw/ADCreHeMlL5nBaqjAD-pymXzADWomJXV5AQSzKgaxaUZ1QKE_xXbwVZGsIk_xhjaOc5in4B2lKtcJdlh5GUWxkFOg9Oq5MU-TKMNdTVDISiVYdWLiFTxNyidmGmis668UCIFUreiq59Yeb5ja87Yj-NQ_x1cQ0fgouYUeHYTWgYmKVc_Tl73Xt_Dco6A_uwgjPATJg2OwDG37LhQm9XW2klye6Y2kSm3b_bedrtXzmSXjNWsTHPeQmf3XUdswngzhIAGKwQXGZ7fXjO1tw7-T1Vk-SGv17N2dH7BOgUSlv2FYU7b6QHdEQbxjq_P5XLM2mO2qbS0lH5FWWrQ-mj8XPOXMOshvZn_CE4Ny_iQJjsyjZuyyHa0c-twd_Jvxu33R2vadKqvoz1Mg5cX-L-ZKzRT95jvytJ9x3RoRPfe7PP_OP6fiW6Dt0EH274YfWvahTNpqgHytm-_qQrdpHX8iE5xtCNuedsIkCBzcfKZsY-iwQIgR_xW4fAnIqxUJw0rRUTpE85prez3BsDd8sldP0IVtGU1_ah59ieWSMj4ELm2h3UwQ3_RxYpg-Wx5mraiyIEnrZ8bVANGxCuJ--_cKWHuxH-L2PvKh9M8GzHS7-2rNZYQLtlMUYEtqoR9ssubMYUsBJrl_7dCRfkSeVZ4EM6XEsPs09ZAHrbZuGaAKXYUgd36N7iQQddUz7HJ-kNb90ZTJ9H0I6Y-KYWNz4wljmoneNdGpHwpHK5uSgmRmhbfoZYlKe5Ldi-cfeH1JiyskMnBicmHBLqQ8riMYGVY25kJhra8wK9tr1TCV7HtGfPyXQs2mzDcnmwe0hqUG0PJ8hzipgleTT-KhZs7DRLzZrFRaj0USgO31PplocQ_qTAHElL_yRMYCHbJCobj34reIrEdThbpqgFiEDqKNgkTUSy8HPZmtqKojblfJBA2cqqHrnw5y81kYw2Q0_LfJEvMwcidXsD5it3g8BvukA6UpCccfnO6KtXwb1iSd_AoH0ORalWjt8cZ2Q=w1238-h928-s-no-gm?authuser=0" },
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
