import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  layout: {
    position: 'relative',
    width: '100%',
    marginTop: 55,
    marginBottom: 55,
    height: 95
  },
  layout1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: '100%',
    marginTop: 55,
  },
  elements: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  }
});
