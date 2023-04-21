import { DxcBox } from "@dxc-technology/halstack-react";
import BoxPropsType from "@dxc-technology/halstack-react/box/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/box/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Box = (props: BoxPropsType) => {
  return <DxcBox {...props} />;
};
export default Box;
