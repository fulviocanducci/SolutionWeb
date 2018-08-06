export interface Token {
   authenticated: number;
   dateCreated: Date;
   dateExpiration: Date;
   token: string;
   message: string;
}