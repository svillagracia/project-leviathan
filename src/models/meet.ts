import Attempt from './attempt';
import Power from './power';

declare interface Meet {
  name: string;
  date: string;
  city: string;
  gym: string;
  attempts: Attempt[];
  power: Power;
}

export default Meet;