import { createStore } from "redux";
import { ContactItem, State } from "../Interfaces";



interface Action {
  type: string;
  amount: ContactItem;
}

const initialState = {
  contactList: [{type:"اینستاگرام",id:"aaa",link:'https://aaa.com',uniqeId:1}],
  darkMode:false
};
const listReducer = (state: State = initialState, action: Action):State => {
  if(action.type==="toggle"){
    return{
      contactList:state.contactList,
      darkMode:!state.darkMode
    }
  }
  if (action.type === "add") {
    const updatedList=state.contactList.concat(action.amount)
    return {
      contactList: updatedList,
      darkMode:state.darkMode
    };
  }

  if (action.type === "delete") {
    const updatedList=state.contactList.filter(item=>item!==action.amount)
    return {
      contactList: updatedList
      ,
      darkMode:state.darkMode
    };
  }
  if (action.type === "edit") {
    const edditableContact=state.contactList.find(item=>item.uniqeId===action.amount.uniqeId)
    edditableContact!.type=action.amount.type
    edditableContact!.link=action.amount.link
    edditableContact!.id=action.amount.id
  }
  return state;
};

const store = createStore(listReducer);

export default store;
