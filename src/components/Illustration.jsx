import React, { useEffect, useState } from 'react';

export default function Illustration() {
    const illustrations = [
        { image: "https://photos.google.com/photo/AF1QipNUxNquC8_vVneMQbk2CPBpBewb7xMlptaZMyep" },
        { image: "https://photos.google.com/photo/AF1QipML6hYWOd3tzDdxIUqsOn84ENMvo9q3TUdw7LVh" },
        { image: "https://photos.google.com/photo/AF1QipML6hYWOd3tzDdxIUqsOn84ENMvo9q3TUdw7LVh" },
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
