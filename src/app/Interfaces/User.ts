export interface User {
    username: string,
    role: Role,
    firstName:	string,
    lastName:	string,
    middleName:	string | '',
    avatar:	string,
    createdOn:	Date | null,
    updatedOn:	Date | null,
    lastEntry:	Date | null,
    isActive:	boolean,
    id:	string
}

export interface UserById {
    username: string,
    role: string,
    firstName: string,
    lastName: string,
    middleName: string,
    avatar: string,
    userAgent: string,
    createdOn: Date,
    updatedOn: Date,
    lastEntry: Date,
    isActive: boolean,
    id: string,
    posts: [
      {
        id: string,
        body: string,
        title: string,
        createdOn: Date,
        updatedOn: Date
      }
    ],
    comments: [
      {
        id: string,
        postId: string,
        text: string,
        createdOn: Date,
        updatedOn: Date
      }
    ]
}

export interface ShortUser {
  firstName:	string,
  lastName:	string,
  middleName:	string | '',
  id:	string,
  username: string,
  avatar:	string,
}
export class Auth {
  public id: string;
  public role: Role;
  public username: string;
  public firstName: string;
  public lastName: string;
  public middleName: string | '';
  public avatar: string ;
  constructor(id: string, role: Role, firstName: string, lastName: string, middleName: string, username: string, avatar: string) {
    this.id = id;
    this.role = role;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.avatar = avatar;  }
}
  
export enum Role {
Admin = 'admin',
User = 'user',
Guest = 'guest'
}

export interface RegUser{
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  middleName: string
}