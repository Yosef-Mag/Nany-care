import * as React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Payment from "./payment";
import ContactUS from "./ContactUS";
// import SignUpPage from "./signup";
import LoginPage from "./Login";
import AllNany from "./Home";

import Profile from "./profile";

import HiringForm from "./hiringForm";
import MapScreen from "./map";
function Profile1() {
  return <Profile />;
}

function Login() {
  return <LoginPage />;
}
function payment() {
  return <Payment />;
}
// function SignUp() {
//   return <SignUpPage />;
// }

function Home1() {
  return <AllNany />;
}

function HiringFormFunc() {
  return <HiringForm />;
}

function LogOut() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Log Out Screen</Text>
    </View>
  );
}
function Map() {
  return <MapScreen />;
}
function ContactUs() {
  return <ContactUS />;
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home1} />
      <Drawer.Screen name="Map" component={Map} />

      <Drawer.Screen name="Sign Up" component={SignUp} />
      <Drawer.Screen name="Log in " component={Login} />

      <Drawer.Screen name="Profile" component={Profile1} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="payment screen" component={Payment} />
      <Drawer.Screen name="Hiring Form" component={HiringForm} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
