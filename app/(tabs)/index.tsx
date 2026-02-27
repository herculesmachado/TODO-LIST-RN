import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Index() {

  const todos = useQuery(api.todos.getTodos)

  const addTodo = useMutation(api.todos.addTodo)

  const deleteTodo = useMutation(api.todos.deleteTodo)
  

  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => addTodo({text: "02"})}>
      <Text>Salvefowd</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTodo({id: todos?.[0]?._id!})}>
      <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );
}
