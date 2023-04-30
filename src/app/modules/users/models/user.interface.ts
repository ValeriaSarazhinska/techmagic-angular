export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
}

export interface UserSelectionEvent {
  userId: number;
  selected: boolean;
}

export type UserSortField = 'id' | 'firstName' | 'lastName';

export type UserSortOrder = 'asc' | 'desc';

export interface UserSortEvent {
  field: UserSortField;
  order: UserSortOrder;
}

export interface UserFromApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
