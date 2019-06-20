export const members = [
    {
        name: "林允文",
        email: "l40303k@gmail.com",
        grade: "01"
    },
    {
        name: "林允文",
        email: "l40303k@gmail.com",
        grade: "01"
    },
    {
        name: "林允文",
        email: "l40303k@gmail.com",
        grade: "01"
    },
]

export const constraints = {
    // audio: {
    //     autoGainControl: { exact: 10, ideal: 10 },
    //     channelCount: { exact: 10, ideal: 10 },
    //     echoCancellation: { exact: 10, ideal: 10 },
    //     latency: { exact: 10, ideal: 10 },
    //     noiseSuppression: { exact: 10, ideal: 10 },
    //     sampleRate: { exact: 10, ideal: 10 },
    //     sampleSize: { exact: 10, ideal: 10 },
    //     volume: { exact: 10, ideal: 10 },
    // },
    video: {
        // aspectRatio: { exact: 10, ideal: 10 },
        // facingMode: { exact: 10, ideal: 10 },
        height: { exact: 720, ideal: 720 },
        width: { exact: 1280, ideal: 1280 },
        frameRate: { exact: 30, ideal: 30 },
    }
}
