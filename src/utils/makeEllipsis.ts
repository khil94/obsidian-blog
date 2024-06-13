export default function makeEllipsis(val: string, target: number) {
  return `${val.length <= target ? val : `${val.slice(0, target)}...`}`;
}
