import { StyleSheet } from "react-native";

export const customColor = {
    bluePrimary: '#00ADB5',
    grey: '#828282',
    greyLight: '#C9CDD0',
    greyLightest: '#e9ebee',
    white: '#ffffff',
    black: '#000000',
    green: '#6AB96A'
}

export const customStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColor.white,
        flexDirection: 'column',
    },
    nameTextStyle: {
        fontSize: 14, fontWeight: '600', color: customColor.black
    }, subtitleTextStyle: {
        fontSize: 12, fontWeight: '400', color: customColor.grey
    }, postTextStyle: {
        fontSize: 16, fontWeight: '400', color: customColor.black,
    }
});