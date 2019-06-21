export default {
    getAudio: async (event) => {
        console.log("onload");
        let stream = null;

        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log(stream);
        } catch(error) {
            console.error(error);
        }
    }
}