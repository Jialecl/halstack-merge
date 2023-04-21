import { DxcInset } from "@dxc-technology/halstack-react";
import InsetPropsType from "@dxc-technology/halstack-react/inset/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/inset/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Inset = (props: InsetPropsType) => {
  return <DxcInset {...props} />;
};

export default Inset;
