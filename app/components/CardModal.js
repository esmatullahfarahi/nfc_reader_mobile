import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardModal = ({ modalName }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSave = () => {
    console.log("Card Number:", cardNumber);
    console.log("Expiry Month:", expiryMonth);
    console.log("Expiry Year:", expiryYear);
    setIsModalVisible(false);
  };

  const handleCardNumberChange = (text) => {
    // Accept only numeric values for card number
    if (/^[0-9]*$/.test(text)) {
      setCardNumber(text);
    }
  };

  const handleMonthChange = (text) => {
    // Prevent entering characters other than digits
    if (text.length <= 2 && /^[0-9]*$/.test(text)) {
      setExpiryMonth(text);
    }
  };
  const handleYearChange = (text) => {
    // Limit year to 4 characters or clear the field
    if (text.length <= 4 && /^[0-9]*$/.test(text)) {
      setExpiryYear(text);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.showModalButton} onPress={toggleModal}>
        <Text style={styles.showModalText}>
          {modalName}
        </Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={toggleModal}
            >
              <Ionicons name="close-circle-outline" size={24} color="blue" />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.cardNumberInput]}
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.smallInput]}
                placeholder="MM"
                value={expiryMonth}
                onChangeText={handleMonthChange}
                keyboardType="numeric"
                maxLength={2}
              />
              <TextInput
                style={[styles.input, styles.smallInput]}
                placeholder="YYYY"
                value={expiryYear}
                onChangeText={handleYearChange}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
            <Button
              title="Save"
              onPress={handleSave}
              style={styles.saveButton}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  showModalButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#0093E9",
    width: "100%",
  
  },
  showModalText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  closeButtonContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  smallInput: {
    width: "100",
    margin: 2,
  },
  saveButton: {
    marginTop: 20,
  },
});

export default CardModal;
