import Todo from './Todo';

class Lists {
  private id: number;
  private name: string;
  private numberofTasks: number;
  private active: boolean;
  private listOfTodo: Todo[];
  constructor(id: number, name: string, numberofTasks: number, active: boolean, listOfTodo: Todo[]) {
    this.id = id;
    this.name = name;
    this.numberofTasks = numberofTasks;
    this.active = active;
    this.listOfTodo = listOfTodo;
  }

  public setId(id: number) {
    this.id = id;
  }
  public getId(): number {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public setActive(active: boolean) {
    this.active = active;
  }
  public getActive(): boolean {
    return this.active;
  }
  public setNumberOfTasks(numberofTasks: number) {
    this.numberofTasks = numberofTasks;
  }
  public getNumberOfTasks(): number {
    return this.numberofTasks;
  }

  public setListOfTodo(listOfTodo: Todo[]) {
    this.listOfTodo = listOfTodo;

  }
  public getListOfTodo(): Todo[] {
    return this.listOfTodo
  }
}

export default Lists;
