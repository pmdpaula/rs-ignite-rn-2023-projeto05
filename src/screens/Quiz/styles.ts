import { THEME } from "../../styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  question: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 300,
    padding: 32,
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GREY_100,
    fontSize: 16,
    marginBottom: 7,
    textAlign: "center",
  },
  header: {
    width: "100%",
    marginBottom: 21,
  },
  footer: {
    flexDirection: "row",
    marginTop: 24,
  },
});
