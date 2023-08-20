import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../presentation/feeds';
import { Text, View } from 'react-native';
import { customStyles } from '../style/styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Avatar from '@rneui/themed/dist/Avatar';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTabNavigation} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator screenOptions={{}}>
            <BottomTab.Screen name='Feeds' component={FeedScreen} options={{
                headerShown: false,
                tabBarIcon: (props) => <Ionicons name='watch-outline' size={props.size} color={props.color} />
            }} />
            <BottomTab.Screen name='Chat' component={ChatScreen} options={{
                headerShown: false,
                tabBarIcon: (props) => <Ionicons name='chatbox-outline' size={props.size} color={props.color} />
            }} />
            <BottomTab.Screen name='News' component={NewsScreen} options={{
                headerShown: false,
                tabBarIcon: (props) => <Ionicons name='newspaper-outline' size={props.size} color={props.color} />
            }} />
            <BottomTab.Screen name='Profile' component={ProfileScreen} options={{
                headerShown: false,
                tabBarIcon: (props) => (
                    <Avatar
                        size={props.size}
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    />
                )
            }} />
        </BottomTab.Navigator>
    );
}

const ChatScreen = () => (
    <View style={customStyles.container}>
        <Text>Chat</Text>
    </View>
)
const NewsScreen = () => (
    <View style={customStyles.container}>
        <Text>News</Text>
    </View>
)
const ProfileScreen = () => (
    <View style={customStyles.container}>
        <Text>Profile</Text>
    </View>
)

export default MainNavigation;
