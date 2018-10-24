interface IListAttributes {
  active: boolean,
  // activeList:number,
  className: string,
  buttonClassName: string,
  listName: string,
  listId: string,
  spanId: string,
  onClickEventFunction?: (event: any) => void
}
export default IListAttributes;
