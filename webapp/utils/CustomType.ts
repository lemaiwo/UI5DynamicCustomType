import SimpleType from "sap/ui/model/SimpleType";
import ValidateException from "sap/ui/model/ValidateException";

/**
 * @namespace be.wl.myapp.utils
 */
export default class CustomType extends SimpleType {
	public formatValue(value:string){
        return value + "format";
    }
	public parseValue(value:string){
        return value + "parse"
    }
	public validateValue(value:string){
        if(!value){
            throw new ValidateException("Empty");
        }
    }

}