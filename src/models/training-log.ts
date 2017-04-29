import TrainingScheme from './training-scheme';
import Weight from './weight';

declare interface TrainingLog {
  date: string;
  description: string;
  main: string;
  scheme: TrainingScheme;
  weight: Weight[];
  pr: boolean;
  notes: string
}

export default TrainingLog;