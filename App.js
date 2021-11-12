import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [show, setShow] = useState(false);
  const [todo, setTodos] = useState([]);

  function onchangeText(text) {
    setFirstName(text);
  }
  function onchangeText2(text) {
    setLastName(text);
  }

  const submitHandler = (value) => {
    if (value.replace(/\s/g, "") !== "") {
      setShow(false);
      setTodos((prevTodo) => {
        return [
          {
            name: value,
            id: Math.floor(Math.random()),
          },
          ...prevTodo,
        ];
      });
    } else {
      setShow(true);
    }
  };

  return (
    // <View>
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      <Text style={styles.headerText}>Persons List.</Text>

      <ScrollView style={styles.view} keyboardShouldPersistTaps="always">
        {todo.map((t, i) => (
          <View style={styles.item} key={i}>
            <Text style={styles.number}>{i}</Text>
            <Text style={styles.content}>{t.name}</Text>
          </View>
        ))}
      </ScrollView>
      {/* form to set first name and last name then push  */}
      <View style={styles.form}>
        {/* error message if the value inside submitHandler() function is empty */}
        {show && (
          <Text style={styles.error}>Please fill the form first :)!</Text>
        )}
        {/* first name label and it input type to enter first name */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Fullname:</Text>
          <TextInput
            style={styles.input}
            placeholder="Fullname"
            secureTextEntry={false}
            autoCorrect={false}
            onChangeText={onchangeText}
          />
        </View>
        {/* last name label and it input type to enter last name */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lastname:</Text>
          <TextInput
            style={styles.input}
            placeholder="Lastname"
            secureTextEntry={false}
            autoCorrect={false}
            onChangeText={onchangeText2}
          />
        </View>
        {/* submit button when press on this button submitHandler() function work .... */}
        <View style={styles.formGroup}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => submitHandler(firstName + "  " + lastName)}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

// styles to todo app screen from head to leg loOoOool 
const styles = StyleSheet.create({
  headerText: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: "#000",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F97316",
    color: "black",
    flexDirection: "row",
    padding: 20,
    paddingVertical: 30,
    borderRadius: 5,
    marginVertical: 10,
    flexWrap: "nowrap",
  },
  number: {
    flex: 1,
    fontWeight: "700",
    fontSize: 12,
    padding: 5,
  },
  content: {
    fontSize: 16,
    fontWeight: "700",
    flex: 2,
  },
  form: {
    height: 225,
    borderStyle: "solid",
    borderTopWidth: 1,
    borderColor: "black",
    padding: 15,
  },
  formGroup: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    color: "#000",
    marginRight: 5,
    fontWeight: "600",
  },
  input: {
    flex: 2,
    backgroundColor: "#FED7AA",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#F97316",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "600",
  },
});
