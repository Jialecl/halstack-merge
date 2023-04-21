import { DxcBleed } from "@dxc-technology/halstack-react";
import BleedPropsType from "@dxc-technology/halstack-react/bleed/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/bleed/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
const Bleed = (props: BleedPropsType) => {
  return <DxcBleed {...props} />;
};

export default Bleed;
