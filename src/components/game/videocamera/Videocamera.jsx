import { useEffect, useRef } from 'preact/hooks';
import "./videocamera.css";

const CameraComponent = ({ useCamera }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (useCamera) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error("Error accessing the camera:", error);
        }
      };
      startCamera();
    }
  }, [useCamera]);

  return <video id="videoElement" ref={videoRef} autoplay></video>;
};

export default CameraComponent;
