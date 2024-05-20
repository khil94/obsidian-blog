export const deviceSize = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
} as const;

type IDeviceName = keyof typeof deviceSize;

export type IDevice = Record<
  IDeviceName,
  `@media only screen and (max-width: ${(typeof deviceSize)[IDeviceName]})`
>;

export const device: IDevice = Object.entries(deviceSize).reduce((p, c) => {
  p[c[0] as IDeviceName] = `@media only screen and (max-width: ${c[1]})`;
  return p;
}, {} as IDevice);
