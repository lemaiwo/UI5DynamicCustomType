import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import JSONModel from "sap/ui/model/json/JSONModel";
import CustomType from "../utils/CustomType";
import HBox from "sap/m/HBox";
import Input from "sap/m/Input";

/**
 * @namespace be.wl.myapp.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	public onInit():void{
		const customType = CustomType;
		this.getView().setModel(new JSONModel({value:"hello"}));
		const inp = new Input({value:"{path:'value',type:'be.wl.myapp.utils.CustomType'}"});
		(this.byId("placeholder") as HBox).insertItem(inp,1)
	}

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

}
