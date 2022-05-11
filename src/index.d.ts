/// <reference types="react" />
import { ComponentType, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {
  size?: string | number;
}

export type Icon = ComponentType<Props>;
export const AME: Icon;
export const CAP: Icon;
export const ACG: Icon;
export const CAM: Icon;
export const AFC: Icon;
export const BOT: Icon;
export const BGT: Icon;
export const CEA: Icon;
export const COR: Icon;
export const CFC: Icon;
export const CBA: Icon;
export const FLA: Icon;
export const FLU: Icon;
export const FOR: Icon;
export const GOI: Icon;
export const INT: Icon;
export const JUV: Icon;
export const PAL: Icon;
export const SAN: Icon;
export const SAO: Icon;
export const Generic: Icon;
