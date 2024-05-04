export const deviceSize = {
  mobile: "425px",
  smallTablet: "650px",
  tablet: "768px",
  mediumTablet: "850px",
  smallLaptop: "950px",
  laptop: "1024px",
  mediumLaptop: "1200px",
} as const;

type DeviceSizes = keyof typeof deviceSize;

type Device = Record<
  DeviceSizes,
  `@media only screen and (max-width: ${(typeof deviceSize)[DeviceSizes]})`
>;

export const device: Device = Object.entries(deviceSize).reduce(
  (device, [deviceName, deviceSize]) => {
    device[
      deviceName as DeviceSizes
    ] = `@media only screen and (max-width: ${deviceSize})`;

    return device;
  },
  {} as Device
);
