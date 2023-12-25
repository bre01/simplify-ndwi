// pages/index.js
import { useState, useRef, useEffect } from 'react';
import * as ndarray from 'ndarray';
import * as ops from 'ndarray-ops';
import getPixels from 'get-pixels';
import * as d3 from 'd3';

const IndexPage = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [ndwi, setNDWI] = useState(null);
  const [threshold, setThreshold] = useState(0.5);

  const canvasRef = useRef(null);

  const calculateNDWI = (imageData1, imageData2) => {
    // Perform NDWI calculation here using ndarray and ndarray-ops
    // Update the ndwi state with the result
  };

  const handleFileChange = (event, setImage) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        getPixels(e.target.result, (err, pixels) => {
          if (!err) {
            setImage(pixels);
          } else {
            console.error('Error reading image pixels');
          }
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const createHistogram = (data) => {
    // Use d3.js to create a histogram
    // Update the canvas with the histogram and vertical line at the current threshold
  };

  const handleThresholdChange = (newThreshold) => {
    // Update the threshold state and recreate the binary image
    setThreshold(newThreshold);
    // Recreate binary image based on the new threshold
  };

  useEffect(() => {
    // Trigger NDWI calculation when both images are loaded
    if (image1 && image2) {
      calculateNDWI(image1, image2);
    }
  }, [image1, image2]);

  useEffect(() => {
    // Create and update histogram when NDWI changes
    if (ndwi) {
      createHistogram(ndwi);
    }
  }, [ndwi]);

  return (
    <div>
      <input type="file" onChange={(e) => handleFileChange(e, setImage1)} />
      <input type="file" onChange={(e) => handleFileChange(e, setImage2)} />

      <canvas ref={canvasRef}></canvas>

      <div>
        <label>Threshold:</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={threshold}
          onChange={(e) => handleThresholdChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default IndexPage;
