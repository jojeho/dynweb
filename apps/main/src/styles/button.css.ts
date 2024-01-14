import { css ,cva} from "../../styled-system/css"
import * as root from "@jjh/styles/button"
const primaryColor="red"
export const primary=cva(root.basic)({visual:"solid" , size:"sm" , color:primaryColor})