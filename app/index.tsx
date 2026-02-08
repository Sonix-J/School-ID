import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={["#ffffff", "#ffed4f", "#61d865"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/CTULogo.png")}
              style={styles.CTULogo}
            ></Image>
            <Image
              source={require("../assets/images/aseanLogo.png")}
              style={styles.aseanLogo}
            ></Image>
          </View>
          <View>
            <Text>Republic of the Philippines</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "serif",
              }}
            >
              CEBU TECHNOLOGICAL {"\n"}UNIVERSITY
            </Text>
            <Text style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>Main Campus:</Text> M.J.
              Cuenco Avenue{"\n"}corner R. Palma St. Cebu City,
            </Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpg")}
            style={styles.profilePic}
          ></Image>
          <View>
            <Image
              source={require("../assets/images/signature.png")}
              style={styles.signature}
            ></Image>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              JAYSON GABRIEL L. LIMOSNERO
            </Text>
          </View>
          <View style={styles.courseContainer}>
            <Text style={{ fontWeight: "bold" }}>BSIT</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>COURSE</Text>
          </View>
          <View style={styles.idContainer}>
            <Text style={{ fontSize: 16 }}>
              ID No.: <Text style={{ fontWeight: "bold" }}>1349206</Text>
            </Text>
          </View>
        </View>

        <View style={styles.certContainer}>
          <Image
            source={require("../assets/images/cert.png")}
            style={styles.certImage}
          />
          <Text style={styles.certText}>
            CTU is ISO 9001 2015 certified by{"\n"}
            TUV Rheinland Philippines, Inc.
          </Text>
        </View>
        <Image
          source={require("../assets/images/footerImage.png")}
          style={styles.footerImage}
        ></Image>
        <Image
          source={require("../assets/images/blue-bg.png")}
          style={styles.blueBg}
        ></Image>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 350,
    height: 550,
    borderRadius: 20,
    padding: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    position: "relative",
    overflow: "hidden",
  },
  headerContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  CTULogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  subHeaderContainer: {
    flexDirection: "row",
  },
  aseanLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 170,
    height: 220,
    resizeMode: "cover",
    borderColor: "#000",
    borderWidth: 2,
  },
  courseContainer: {
    minWidth: 190,
    borderBottomWidth: 3,
    borderColor: "#000",
    alignItems: "center",
  },
  idContainer: {
    minWidth: 190,
  },
  certContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
    alignItems: "center",
    zIndex: 2,
  },
  certImage: {
    width: 120,
    height: 60,
    resizeMode: "cover",
    borderColor: "#000",
    borderWidth: 1,
  },
  certText: {
    fontSize: 8,
    color: "white",
    marginTop: 2, 
  },
  signature: {
    width: 90,
    height: 30,
  },
  footerImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 350,
    height: 80,
    resizeMode: "cover",
    zIndex: -1,
  },
  blueBg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 360,
    height: 120,
    resizeMode: "cover",
    zIndex: -2, // lower than footerImage
  },
});
