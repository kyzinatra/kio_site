interface ILayout {
  withNav?: boolean;
  withFooter?: boolean;
  protectedFrom?: "authorized" | "anonymous" | null
}