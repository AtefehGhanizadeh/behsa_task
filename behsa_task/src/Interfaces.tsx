export interface ContactItem {
    type: string;
    link: string;
    id: string;
    uniqeId:number
  }
  
 export interface State {
    contactList: ContactItem[];
    darkMode:boolean
  }