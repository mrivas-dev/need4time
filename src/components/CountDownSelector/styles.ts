import { StyleSheet } from "react-native";

export const containerStyles = (isLandscapeMode: boolean): any => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: isLandscapeMode ? 'space-around' : 'space-between',
    marginBottom: 15,
    ...isLandscapeMode ? {} : {paddingHorizontal: 25}
});

export const styles = StyleSheet.create({
    dialogSelectorContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 200,
        width: '100%',
        
    }
});
