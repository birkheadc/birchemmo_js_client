export default interface IChunk {
  title: string,

  setTitle: (title: string) => void,

  getShallowCopy: () => IChunk
}