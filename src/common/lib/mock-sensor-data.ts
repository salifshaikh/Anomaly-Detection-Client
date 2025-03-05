// common/lib/mock-sensor-data.ts
export interface SensorAnomalyData {
  sensorId: string;
  type: string;
  description: string;
  recommendation: string;
  timestamp: number;
  anomalyScore: number;
  chartData: {
    normal: number[];
    anomalous: number[];
  };
  imagePath?: string;
}

export const mockSensorAnomalyData: SensorAnomalyData[] = [
  {
    sensorId: 'SENSOR-001',
    type: 'Temperature',
    description: 'Unusual temperature spike detected in industrial equipment',
    recommendation: 'Immediate inspection and cooling system check required',
    timestamp: Date.now(),
    anomalyScore: 0.85,
    chartData: {
      normal: [5, 6, 7, 6, 5],
      anomalous: [10, 12, 15, 13, 11]
    },
    imagePath: '/images/anomaly-sample.png'
  },
  {
    sensorId: 'SENSOR-002',
    type: 'Vibration',
    description: 'Critical vibration anomaly in mechanical system',
    recommendation: 'Halt operations and perform comprehensive machinery diagnostic',
    timestamp: Date.now(),
    anomalyScore: 0.92,
    chartData: {
      normal: [3, 4, 3, 4, 3],
      anomalous: [8, 10, 12, 9, 11]
    },
    imagePath: '/images/anomaly-sample.png'
  }
];