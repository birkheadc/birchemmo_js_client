export default interface IPawn {
  title: string,

  setTitle: (title: string) => void,
  
  getShallowCopy: () => IPawn
}