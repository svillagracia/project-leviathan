import Power from './power'

declare interface User {
  id: number;
  name: string;
  team: string;
  createdAt: string;
  measurment: string;
  weight: number;
  height: string;
  power: Power;
  system: string;
}

export default User;