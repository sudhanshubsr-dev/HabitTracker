import React, { useEffect, useState } from 'react';

export default function Illustration() {
    const illustrations = [
        { image: "https://imagesprojects.s3.ap-south-1.amazonaws.com/illustration2.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiBD%2B%2BEs4b60MZ%2Fzkc8cSz506Kv7%2Bn9AxXEMUj9Y5lCXjQIhAJzpmkrI%2BkutmIKj7kAyY6aW%2BT7R4t7A8dC4qOTKRV5fKuQCCCYQARoMODMyMTY0MjczMjMwIgysROUx5oiiV4ruwJcqwQK4Tt8A5J1DfUgLFQh8uhq3%2BfYpAszLOLEnBECtr7HILKlKr4JDjpZoQgllDXSfwaFs%2Feqzui8a09Op%2Fuaz5a%2Bbrd1%2FqOJWdK6hRnx00NcZ6hTNqznXHFbCE4oxu9eIZO%2B%2Bm1hmLHjZwRdfWKK8nIwqh4ORHiTINVK7a4wXasI59x%2Bz9cQYB2rilzy%2BlgqBH3%2Buj0DaCytEbzi4UYy%2B2KKnKwztMvNGUHqao5iYe1wKhpNv4iQ20qOY15iy8eWTFkHOK3Y6V2DiGBKxW4sI%2F0heLzAzPEGrOPC7FdxJSkZ3zr2AWue1F57Who0Nr4jebTeG1xT9%2FHj%2F4BesMnB%2FYB2yEaldy692rCC7rxW9hL2hMB7jhyXRcMBuSdubQo52lsLEB7M%2FrMufl3QtWQllTQ9ahD49Yj71QQ6x1l4Sk8UiZQUw%2BM%2FfqwY6swIelw5%2BPIj9srXZqtjeSYuHXkYF%2BcBtllJlYk%2Bm36cGgLEbeTbiBPfXAov2q61eLlJeALQrbXtY%2Fk94CoHiRO7dhh2p0DNIlByKKQwIwrVWYyyTlG5hNlgKTdYiIC92g0icjkXwhtJirSnWNBqHdurkpKkYmsLY2Bb1VlTZlViV6uQ0dyjc%2FeephIByytyA1A70rZQFdzjDHEhCVfLqP8CEweQ95TgSMJ4xAH6rjn9kRkOtiZ%2B%2B1Y5NCWSxka0kyOvUTxZtoBxjvtG6%2Bp6Tfys9pi2oVhe33Aef8rrhV%2BaHoAiY0N0z1UunJfOcpQ8YDi8LEfO%2BWPR9BDJz9t5YaoujGmZMIYKe%2FvrBK%2BVYq1aPplxGrAvgMw00onhhdfxpSs1SGZhpamFE5LQ2finY7C%2Fe8FPx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231212T051423Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43140&X-Amz-Credential=ASIA4DQG3DRHDKPRGDMH%2F20231212%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=733018f41444867944800547ba776b1adc5fbbbc9cf8d49f882825daac51f650" },
        { image: "https://imagesprojects.s3.ap-south-1.amazonaws.com/illustration3.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiBD%2B%2BEs4b60MZ%2Fzkc8cSz506Kv7%2Bn9AxXEMUj9Y5lCXjQIhAJzpmkrI%2BkutmIKj7kAyY6aW%2BT7R4t7A8dC4qOTKRV5fKuQCCCYQARoMODMyMTY0MjczMjMwIgysROUx5oiiV4ruwJcqwQK4Tt8A5J1DfUgLFQh8uhq3%2BfYpAszLOLEnBECtr7HILKlKr4JDjpZoQgllDXSfwaFs%2Feqzui8a09Op%2Fuaz5a%2Bbrd1%2FqOJWdK6hRnx00NcZ6hTNqznXHFbCE4oxu9eIZO%2B%2Bm1hmLHjZwRdfWKK8nIwqh4ORHiTINVK7a4wXasI59x%2Bz9cQYB2rilzy%2BlgqBH3%2Buj0DaCytEbzi4UYy%2B2KKnKwztMvNGUHqao5iYe1wKhpNv4iQ20qOY15iy8eWTFkHOK3Y6V2DiGBKxW4sI%2F0heLzAzPEGrOPC7FdxJSkZ3zr2AWue1F57Who0Nr4jebTeG1xT9%2FHj%2F4BesMnB%2FYB2yEaldy692rCC7rxW9hL2hMB7jhyXRcMBuSdubQo52lsLEB7M%2FrMufl3QtWQllTQ9ahD49Yj71QQ6x1l4Sk8UiZQUw%2BM%2FfqwY6swIelw5%2BPIj9srXZqtjeSYuHXkYF%2BcBtllJlYk%2Bm36cGgLEbeTbiBPfXAov2q61eLlJeALQrbXtY%2Fk94CoHiRO7dhh2p0DNIlByKKQwIwrVWYyyTlG5hNlgKTdYiIC92g0icjkXwhtJirSnWNBqHdurkpKkYmsLY2Bb1VlTZlViV6uQ0dyjc%2FeephIByytyA1A70rZQFdzjDHEhCVfLqP8CEweQ95TgSMJ4xAH6rjn9kRkOtiZ%2B%2B1Y5NCWSxka0kyOvUTxZtoBxjvtG6%2Bp6Tfys9pi2oVhe33Aef8rrhV%2BaHoAiY0N0z1UunJfOcpQ8YDi8LEfO%2BWPR9BDJz9t5YaoujGmZMIYKe%2FvrBK%2BVYq1aPplxGrAvgMw00onhhdfxpSs1SGZhpamFE5LQ2finY7C%2Fe8FPx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231212T051531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA4DQG3DRHDKPRGDMH%2F20231212%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=4d11aec7241a2fa1346efc5fd5ac0d0806ae763a8dc3a6d737d5de110fe5a292" },
        { image: "https://imagesprojects.s3.ap-south-1.amazonaws.com/illustrations.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiBD%2B%2BEs4b60MZ%2Fzkc8cSz506Kv7%2Bn9AxXEMUj9Y5lCXjQIhAJzpmkrI%2BkutmIKj7kAyY6aW%2BT7R4t7A8dC4qOTKRV5fKuQCCCYQARoMODMyMTY0MjczMjMwIgysROUx5oiiV4ruwJcqwQK4Tt8A5J1DfUgLFQh8uhq3%2BfYpAszLOLEnBECtr7HILKlKr4JDjpZoQgllDXSfwaFs%2Feqzui8a09Op%2Fuaz5a%2Bbrd1%2FqOJWdK6hRnx00NcZ6hTNqznXHFbCE4oxu9eIZO%2B%2Bm1hmLHjZwRdfWKK8nIwqh4ORHiTINVK7a4wXasI59x%2Bz9cQYB2rilzy%2BlgqBH3%2Buj0DaCytEbzi4UYy%2B2KKnKwztMvNGUHqao5iYe1wKhpNv4iQ20qOY15iy8eWTFkHOK3Y6V2DiGBKxW4sI%2F0heLzAzPEGrOPC7FdxJSkZ3zr2AWue1F57Who0Nr4jebTeG1xT9%2FHj%2F4BesMnB%2FYB2yEaldy692rCC7rxW9hL2hMB7jhyXRcMBuSdubQo52lsLEB7M%2FrMufl3QtWQllTQ9ahD49Yj71QQ6x1l4Sk8UiZQUw%2BM%2FfqwY6swIelw5%2BPIj9srXZqtjeSYuHXkYF%2BcBtllJlYk%2Bm36cGgLEbeTbiBPfXAov2q61eLlJeALQrbXtY%2Fk94CoHiRO7dhh2p0DNIlByKKQwIwrVWYyyTlG5hNlgKTdYiIC92g0icjkXwhtJirSnWNBqHdurkpKkYmsLY2Bb1VlTZlViV6uQ0dyjc%2FeephIByytyA1A70rZQFdzjDHEhCVfLqP8CEweQ95TgSMJ4xAH6rjn9kRkOtiZ%2B%2B1Y5NCWSxka0kyOvUTxZtoBxjvtG6%2Bp6Tfys9pi2oVhe33Aef8rrhV%2BaHoAiY0N0z1UunJfOcpQ8YDi8LEfO%2BWPR9BDJz9t5YaoujGmZMIYKe%2FvrBK%2BVYq1aPplxGrAvgMw00onhhdfxpSs1SGZhpamFE5LQ2finY7C%2Fe8FPx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231212T051549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA4DQG3DRHDKPRGDMH%2F20231212%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=1c59242d0fd366d2ed30fba4a1a49579c5ea33bc548dfd85fc7b61d7ecd9ee82" },
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
