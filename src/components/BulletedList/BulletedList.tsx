import { DxcBulletedList } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */

type SVG = ReactNode &
  (
    | React.SVGProps<SVGSVGElement>
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  );

type BulletedListPropsType = {
  children: ReactNode;
  type?: "disc" | "circle" | "square" | "number" | "icon";
  icon?: string | SVG;
};

const BulletedList = (props: BulletedListPropsType) => {
  return <DxcBulletedList {...props} />;
};
export default BulletedList;
