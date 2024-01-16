import { StyleSheet } from "react-native";
import { SEPARATOR } from "../../utils/styles";

export const styles = StyleSheet.create({
  layout: {
    position: 'relative',
    width: '100%',
    marginTop: SEPARATOR,
    marginBottom: SEPARATOR,
    height: 95
  },
  layout1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: '100%',
    marginTop: SEPARATOR,
  },
  elements: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  }
});
