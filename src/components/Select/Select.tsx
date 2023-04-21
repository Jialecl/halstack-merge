import { DxcSelect } from "@dxc-technology/halstack-react";
import SelectPropsType from "@dxc-technology/halstack-react/select/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/select/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Select(props: SelectPropsType) {
  return <DxcSelect {...props} />;
}
