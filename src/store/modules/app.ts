import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import {
  getSidebarStatus,
  getSize,
  setSidebarStatus,
  setLanguage,
  setSize
} from "@/utils/cookies";
import { getLocale } from "@/lang";
import store from "@/store";

export enum DeviceType {
  Mobile,
  Desktop
}

export interface IAppState {
  device: DeviceType;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
  language: string;
  size: string;
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements IAppState {
  public sidebar = {
    opened: getSidebarStatus() !== "closed",
    withoutAnimation: false
  };
  public device = DeviceType.Desktop;
  public language = getLocale();
  public size = getSize() || "medium";

  @Mutation
  private SET_LANGUAGE(language: string) {
    this.language = language
    setLanguage(this.language)
  }


  @Action
  public SetLanguage(language: string) {
    this.SET_LANGUAGE(language)
  }
  
}

export const AppModule = getModule(App);
