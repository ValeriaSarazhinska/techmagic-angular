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
