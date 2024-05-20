import { IDevice } from "@/style/device";
import { IPaletteTheme } from "@/style/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: IPaletteTheme;
    device: IDevice;
  }
}
