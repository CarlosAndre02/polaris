import { Language } from './language.model';

export interface LP_User {
  _id?: string;
  name: string;
  email: string;
  languages?: Language[];
}
