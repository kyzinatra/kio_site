import { IUserInitialInformationBoard } from "@components/ui-kit/user-profile-information-board/user-initial-information-board/user-initial-information-board";

export interface IUserOfferBillet extends Pick<IUserInitialBillet, title | subtitle | footerText | btnText> {}
