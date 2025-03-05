"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export interface AnomalyDetectionResult {
  image?: string | null;
  mask?: string | null;
  bbox?: string[] | null;
  anomalyScore?: number | null;
  saliencyMap?: string | null;
}

export const useAnomalyDetection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnomalyDetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const detectAnomaly = async (
    file: File, 
    anomalyDescription: string = 'color defect',
    objectName: string = 'object', 
    objectNumber: string = '1', 
    maskNumber: string = '1', 
    areaThreshold: string = '0.5'
  ) => {
    setLoading(true);
    setError(null);
    
    try {
      // Create FormData to send the file and parameters
      const formData = new FormData();
      formData.append('image', file);
      formData.append('anomalyDescription', anomalyDescription);
      formData.append('objectName', objectName);
      formData.append('objectNumber', objectNumber);
      formData.append('maskNumber', maskNumber);
      formData.append('areaThreshold', areaThreshold);

      // Validate file
      if (!file) {
        throw new Error('No file selected');
      }

      console.log('Uploading file:', {
        name: file.name,
        type: file.type,
        size: file.size,
        params: {
          anomalyDescription,
          objectName,
          objectNumber,
          maskNumber,
          areaThreshold
        }
      });

      // Send to your Next.js API route
      const response = await fetch('/api/detect-anomaly', {
        method: 'POST',
        body: formData
      });

      // Parse response
      const apiResult = await response.json();

      // Check for error in response
      if (!response.ok || apiResult.error) {
        console.error('API Error Response:', apiResult);
        throw new Error(apiResult.error || 'Anomaly detection failed');
      }

      // Log full result for debugging
      console.log('Anomaly Detection Result:', apiResult);

      // Update result
      setResult({
        image: apiResult.image,
        mask: apiResult.mask,
        bbox: apiResult.bbox,
        anomalyScore: apiResult.anomalyScore,
        saliencyMap: apiResult.saliencyMap
      });

      toast.success('Anomaly detection completed');
    } catch (error) {
      console.error('Anomaly detection error:', error);
      
      // Set error state
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An unknown error occurred';
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { detectAnomaly, loading, result, error };
};