import { DxcBulletedList } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";
/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */

type BulletedListItemPropsType = {
  children?: ReactNode;
};

const BulletedListItem = ({
  children = "Default Text",
}: BulletedListItemPropsType) => {
  return <DxcBulletedList.Item>{children}</DxcBulletedList.Item>;
};
export default BulletedListItem;
