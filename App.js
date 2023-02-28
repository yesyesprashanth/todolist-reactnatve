import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, {useState} from 'react';
import TodoItem from "./components/TodoItem";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  function handleAddTask(){
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }

  function handleDelete(index){
     const taskListCopy = [...taskList];
     taskListCopy.splice(index,1);
     setTaskList(taskListCopy);
  }

  return (    
    <View style={styles.container}>
      {/* Task List */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>
        <View style={styles.ItemList}>
          {taskList.map((task,index)=>{
            return (
                <TouchableOpacity key={index} onPress={()=>handleDelete(index)}>
                    <TodoItem  text={task} />
                </TouchableOpacity>
            )
          })}
        </View>
      </View>
      {/* Text to Enter the todo item */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}         
      >      
      <TextInput style={styles.input} placeholder={'write task here'} value = {task} onChangeText = {text=>setTask(text)} />       
       
       <TouchableOpacity onPress = {()=>handleAddTask()}>
        <View style={styles.addWrapper}>
           <Text style={styles.addText}>+</Text>
        </View>
       </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAEd",
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontweight: "bold",
  },
  ItemList: {
    marginTop: 20,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent: "space-around",
    alignItems:"center",
  },  
input:{
  paddingVertical:15,
  paddingHorizontal:20,
  backgroundColor:'#FFFFFF',
  borderRadius:50,
  borderColor:'#C0C0C0',
  borderWidth:1,  
  width:250,
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#FFFFFF',
  justifyContent:'center',
  alignItems:"center",
  borderRadius:50,
  borderColor:'#C0C0C0',
  borderWidth:1,
},
addText:{
  fontSize:20,
},
});
