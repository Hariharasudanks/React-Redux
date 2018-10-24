
class Todo  {
  private id: number;
  private name :string ;
 private isImportant: boolean;
 private isChecked: boolean;
  private note: string;
  private activeTask: boolean;
  private dueDate: string;
  private addtoDay: boolean;
  private reminder: string;
  constructor(id:number, name:string, isImportant:boolean, isChecked:boolean , note:string , dueDate:string, addtoDay:boolean, reminder:string){
    this.id = id;
    this.name = name;
    this.isImportant = isImportant;
    this.isChecked = isChecked;
    this.note = note;
    this.dueDate = dueDate;
    this.addtoDay = addtoDay;
    this.reminder = reminder;

  }
  public getId():number{
      return this.id;
  }
  public setId(id:number):void{
      this.id = id;
  }
  // pblic getActi
  public setName(name:string):void{
      this.name = name;
  }
  public getName():string{
      return this.name;
  }
  public setisImportant(isImportant:boolean){
    this.isImportant = isImportant;
  }
  public getIsActive():boolean{
      return this.activeTask;
  }
  public setIsActive(activeTask:boolean){
      this.activeTask = activeTask;
  }
  public getisImportant():boolean{
      return this.isImportant;
  }
  public setisChecked(isChecked:boolean){
      this.isChecked = isChecked;
  }

  public getisChecked():boolean{
      return this.isChecked;
  }

  public setNote(note:string){
      this.note = note;
  }
  
  public getNote():string{
      return this.note;
  }

  public setdueDate(dueDate:string){
      this.dueDate = dueDate;
  }

  public getdueDate():string{
      return this.dueDate;
  }

  public setaddtoDay(addtoDay:boolean){
      this.addtoDay = addtoDay;
  }

  public getaddtoDay():boolean{
     return this.addtoDay;
  }

  public setreminder(reminder:string){
      this.reminder = reminder; 
  }
  public getreminder():string{
      return this.reminder;
  }
}

export default Todo;
