import { Image, SafeAreaView, ScrollView, View } from "react-native"
import { customColor, customStyles } from "../style/styles";
import { Avatar, FAB } from "@rneui/themed";
import { Text } from "@rneui/base";
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const FeedScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ ...customStyles.container, justifyContent: 'flex-end' }}>
                <ScrollView style={{ flex: 1 }}>

                    <View style={{}}>
                        <View style={{ flexDirection: 'row', height: 64, alignItems: 'center', paddingHorizontal: 20 }} >
                            <Avatar
                                size={48}
                                rounded
                                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                            />
                            <View style={{ width: 8 }} />
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={customStyles.nameTextStyle}>Usup Suparman</Text>
                                <Text style={customStyles.subtitleTextStyle}>Mar 24, 2022</Text>
                            </View>

                        </View>

                        <View style={{ height: 483, alignItems: 'stretch', flexDirection: 'column' }}>

                            <View style={{ borderColor: customColor.greyLight, borderWidth: 0.5 }} />

                            <View style={{ paddingHorizontal: 20, paddingVertical: 24 }} >
                                <Text style={customStyles.postTextStyle} numberOfLines={5}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </View>

                            <View style={{
                                flex: 1,
                                backgroundColor: 'red'
                            }} >
                                <Image source={{
                                    uri: 'https://picsum.photos/500'
                                }} resizeMode="cover" style={{ flex: 1 }} />
                            </View>

                            <View style={{ flexDirection: 'row', height: 52, justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Icon name="share-social-outline" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <Icon name="chatbox-ellipses-outline" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <Text style={{ ...customStyles.postTextStyle, color: customColor.greyLight }} >34</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Entypo name="block" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <SimpleLineIcons name="like" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <Text style={{ ...customStyles.postTextStyle, color: customColor.green }} >34</Text>
                                    <View style={{ width: 8 }} />
                                    <SimpleLineIcons name="dislike" size={28} color={customColor.greyLight} />
                                </View>

                            </View>
                        </View>



                    </View>

                    <View style={{ borderColor: customColor.greyLight, borderWidth: 4 }} />

                    <View style={{}}>
                        <View style={{ flexDirection: 'row', height: 64, alignItems: 'center', paddingHorizontal: 20 }} >
                            <Avatar
                                size={48}
                                rounded
                                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                            />
                            <View style={{ width: 8 }} />
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={customStyles.nameTextStyle}>Usup Suparman</Text>
                                <Text style={customStyles.subtitleTextStyle}>Mar 24, 2022</Text>
                            </View>

                        </View>

                        <View style={{ height: 483, alignItems: 'stretch', flexDirection: 'column' }}>

                            <View style={{ borderColor: customColor.greyLight, borderWidth: 0.5 }} />

                            <View style={{ paddingHorizontal: 20, paddingVertical: 24 }} >
                                <Text style={customStyles.postTextStyle} numberOfLines={5}>
                                    Lorem ipsum dolor sit amet,
                                </Text>
                            </View>

                            <View style={{
                                flex: 1,
                            }} >
                                <Image source={{
                                    uri: 'https://picsum.photos/500'
                                }} resizeMode="cover" style={{ flex: 1 }} />
                            </View>

                            <View style={{ flexDirection: 'row', height: 52, justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Icon name="share-social-outline" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <Icon name="chatbox-ellipses-outline" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <Text style={{ ...customStyles.postTextStyle, color: customColor.greyLight }} >34</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Entypo name="block" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <SimpleLineIcons name="like" size={28} color={customColor.greyLight} />
                                    <View style={{ width: 8 }} />
                                    <Text style={{ ...customStyles.postTextStyle, color: customColor.green }} >34</Text>
                                    <View style={{ width: 8 }} />
                                    <SimpleLineIcons name="dislike" size={28} color={customColor.greyLight} />
                                </View>

                            </View>
                        </View>

                    </View>

                    <View style={{ height: 50 }} />

                </ScrollView>

                <View style={{ position: 'absolute', flex: 1, alignSelf: 'flex-end' }}>
                    <FAB
                        color={customColor.bluePrimary}
                        style={{ alignSelf: 'flex-end', paddingRight: 20, paddingBottom: 62 }}
                        icon={{
                            name: 'edit', iconStyle: {
                                color: customColor.white
                            }
                        }} />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default FeedScreen;