import { Text, View, StyleSheet, Pressable } from "react-native";
import { PrescriptionCardProps } from "../types/types";

function PrescriptionCard({
  medicationName,
  dosage,
  frequency,
  isSelected,
  onPress,
}: PrescriptionCardProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.medicationName}>{medicationName}</Text>
        <Text style={styles.dosage}>{dosage}</Text>
        <Text style={styles.frequency}>{frequency}</Text>
      </View>
    </Pressable>
  );
}

export default PrescriptionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 4,
    elevation: 2,
    padding: 10,
  },
  selectedContainer: {
    backgroundColor: "green",
  },
  medicationName: {
    color: "#212529",
    fontSize: 32,
    fontWeight: "bold",
  },
  dosage: {
    color: "#212529",
    fontSize: 16,
  },
  frequency: {
    color: "#212529",
    fontSize: 16,
  },
});
