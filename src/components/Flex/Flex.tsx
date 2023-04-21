import { DxcFlex } from "@dxc-technology/halstack-react/";
import FlexPropsType from "@dxc-technology/halstack-react/flex/types";

const Flex = (props: FlexPropsType) => {
  return <DxcFlex {...props}>{props.children}</DxcFlex>;
};

export default Flex;
