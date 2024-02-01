import { IUserInitialBillet } from "../user-initial-billet/user-initial-billet";

export interface IUserInputBillet extends Pick<IUserInitialBillet, title | subtitle | footerText> {
    mainText?: string,
    btnText?: string,
    title: string,
}
