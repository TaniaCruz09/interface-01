import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <Text style={styles.headerText}>Profile</Text>
        <Ionicons
          style={styles.iconThreePoints}
          name="ellipsis-horizontal-circle"
          size={32}
          color="black"
        />
      </View>
      <View style={styles.photoAndUserName}>
        <Image
          style={styles.imgProfile}
          source={require("../images/persona.jpg")}
        />
        <Text style={styles.userName}>Andrew Ainsley</Text>
      </View>
      <View style={styles.line}>
        <View style={styles.insideLine}>
          <Text style={styles.textBigNumber}>12</Text>
          <Text style={styles.textUnderBigNumber}>Events</Text>
        </View>
        <View style={styles.insideLineCenter}>
          <Text style={styles.textBigNumber}>7,389</Text>
          <Text style={styles.textUnderBigNumber}>Followers</Text>
        </View>
        <View style={styles.insideLine}>
          <Text style={styles.textBigNumber}>125</Text>
          <Text style={styles.textUnderBigNumber}>Following</Text>
        </View>
      </View>
      <View style={styles.containerEvents}>
        <View style={styles.dataAndIcons}>
          <AntDesign name="calendar" size={26} color="black" />
          <Text style={styles.textData}>Manage Events</Text>
          <AntDesign
            style={styles.iconRight}
            name="right"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.dataAndIcons}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={26}
            color="black"
          />
          <Text style={styles.textData}>Message Center</Text>
          <AntDesign
            style={styles.iconRight}
            name="right"
            size={20}
            color="black"
          />
        </View>
      </View>
      <View style={styles.containerEndData}>
        <View style={styles.dataAndIcons}>
          <FontAwesome5 name="user" size={25} color="black" />
          <Text style={styles.textData}>Profile</Text>
          <AntDesign
            style={styles.iconRight}
            name="right"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.dataAndIcons}>
          <Ionicons name="ios-notifications-outline" size={26} color="black" />
          <Text style={styles.textData}>Notification</Text>
          <AntDesign
            style={styles.iconRight}
            name="right"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.dataAndIcons}>
          <MaterialIcons name="payment" size={26} color="black" />
          <Text style={styles.textData}>Payments</Text>
          <AntDesign
            style={styles.iconRight}
            name="right"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.dataAndIcons}>
          <MaterialCommunityIcons
            name="arrow-up-down"
            size={26}
            color="black"
          />
          <Text style={styles.textData}>Linked Accounts</Text>
          <AntDesign
            style={styles.iconRight}
            name="right"
            size={20}
            color="black"
          />
        </View>
      </View>
      <View style={styles.containerfoother}>
        <View style={styles.iconfoother}>
          <AntDesign name="home" size={28} color="#aaaa" />
          <Text style={styles.textfoother}>Home</Text>
        </View>
        <View style={styles.iconfoother}>
          <Feather name="compass" size={28} color="#aaaa" />
          <Text style={styles.textfoother}>Explore</Text>
        </View>
        <View style={styles.iconfoother}>
          <MaterialIcons name="favorite-border" size={29} color="#aaaa" />
          <Text style={styles.textfoother}>Favorites</Text>
        </View>
        <View style={styles.iconfoother}>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={28}
            color="#aaaa"
          />
          <Text style={styles.textfoother}>Tickets</Text>
        </View>
        <View style={styles.iconfoother}>
          <FontAwesome name="user" size={28} color="blue" />
          <Text style={styles.textfoother}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  header: {
    backgroundColor: "#ffff",
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  headerText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 6,
  },
  iconThreePoints: {
    position: "absolute",
    right: 12,
    margin: 8,
  },
  photoAndUserName: {
    alignItems: "center",
  },
  imgProfile: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: 30,
    marginBottom: 20,
  },
  userName: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
  },
  line: {
    flexDirection: "row",
    marginHorizontal: 13,
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#aaaa",
    justifyContent: "center",
  },
  insideLine: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 18,
    borderColor: "#aaaa",
    paddingRight: 15,
  },
  insideLineCenter: {
    height: 80,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 18,
    borderEndWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#aaaa",
    paddingRight: 15,
    paddingLeft: 15,
  },

  textBigNumber: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textUnderBigNumber: {
    fontSize: 13,
    marginTop: 5,
  },
  containerEvents: {
    marginTop: 25,
    borderBottomWidth: 1,
    borderColor: "#aaaa",
    marginHorizontal: 13,
  },
  dataAndIcons: {
    flexDirection: "row",
    marginLeft: 15,
    marginBottom: 25,
  },
  iconRight: {
    position: "absolute",
    right: 12,
  },
  textData: {
    fontSize: 17,
    marginLeft: 20,
  },
  containerEndData: {
    marginTop: 25,
    marginHorizontal: 13,
  },
  containerfoother: {
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
  },
  iconfoother: {
    margin: 20,
    marginHorizontal: 25,
  },
  textfoother: {
    color: "#aaaa",
    fontSize: 10,
  },
});
