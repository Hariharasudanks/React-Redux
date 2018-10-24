import Lists from "./list"
import Todo from './Todo';

class Store2 {
  public store: Lists[] = [new Lists(1, "list1", 2, true, 
  [new Todo(1, "Task abcd", false, false, "notes2143214", "", false, ""),
  new Todo(2, "Two inside one", false, false, "2143214", "", false, "")]), 

  new Lists(2, "list2", 1, true, 
  [new Todo(1, "Task hihk", false, false, "notes2143214", "", false, "")])
   

];
  
}
   

export default new Store2();

