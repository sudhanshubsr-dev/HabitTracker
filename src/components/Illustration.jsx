import React, { useState, useEffect } from 'react';

export default function Illustration() {
    const illustrations = [
        { image: "https://drive.google.com/file/d/1f4m3aHVmpCVLH5n_ENNVtgXoqKfPBz2i/view?usp=sharing" },
        { image: "https://drive.google.com/file/d/1b9ybrZyhZCZxrLy8bEf57F857kzZQqft/view?usp=sharing" },
        { image: "https://drive.google.com/file/d/1hc4PuyQOsRc_Xg9RIs-esds3HIft2vxF/view?usp=sharing" },
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
