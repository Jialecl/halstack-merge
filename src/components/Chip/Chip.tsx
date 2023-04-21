import PropTypes from "prop-types";
import { DxcChip } from "@dxc-technology/halstack-react";
import ChipPropsType from "@dxc-technology/halstack-react/chip/types";

/**
 * @uxpindocurl https://developer.dxc.com/halstack/9/components/chip/
 */
const Chip = (props: ChipPropsType) => {
  return <DxcChip {...props} />;
};

export default Chip;
