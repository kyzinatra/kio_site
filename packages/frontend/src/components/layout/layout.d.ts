interface ILayout {
  withNav?: boolean;
  withHelp?: boolean;
  withFooter?: boolean;
  protectedFrom?: "authorized" | "anonymous" | null
}