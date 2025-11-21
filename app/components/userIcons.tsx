import { View, Text, StyleSheet } from 'react-native'

interface UserIconsProps {
    style?: any;  // or better: StyleProp<ViewStyle>
}

const UserIcons: React.FC<UserIconsProps> = ({style}) => {
    return (
    <View style={styles.iconsContainer}>
      <View style={styles.circleRow}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>

      <View style={styles.circleRowLast}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}

export default UserIcons;

const styles = StyleSheet.create({
  iconsContainer: {
    alignItems: "center",
  },

  circleRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 400,
    marginBottom: 6,
  },

  circleRowLast: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 400,
  },

  circle: {
    width: 70,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#cb432bff",
    borderWidth: 3,
    borderColor: "black",
  },
});
