import {BtnCssType} from "./ButtonCssType.enum";
import {BtnType} from "./ButtonType.enum";

export interface IBtn {
    title: String,
    disabled: boolean,
    btnStyle: BtnCssType,
    btnType?: BtnType
}
