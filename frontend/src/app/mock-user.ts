import { User } from './user';

export const USER: User = {
  "id": 1,
  "name": "Robert",
  "username": "r.klonner@gmx.at",
  "password": "123",
  "calorie_requirement_diet": 2100,
  "household_user_ids": [1,2]
};

export const HOUSEHOLD: User[] = [
  {
  "id": 1,
  "name": "Robert",
  "username": "r.klonner@gmx.at",
  "password": "123",
  "calorie_requirement_diet": 2100,
  "household_user_ids": [1,2]
  },
  {
  "id": 2,
  "name": "Sandra",
  "username": "s.bachhofner@gmx.at",
  "password": "123",
  "calorie_requirement_diet": 1400,
  "household_user_ids": [1,2]
  }
];