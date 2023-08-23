// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('');

//   const addTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title,
//       description,
//       dueDate,
//       priority,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//     setPriority('');
//   };

//   const markTaskAsCompleted = (taskId) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, completed: true };
//       }
//       return task;
//     });

//     setTasks(updatedTasks);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Task Management App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Title"
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Description"
//         value={description}
//         onChangeText={(text) => setDescription(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Due Date"
//         value={dueDate}
//         onChangeText={(text) => setDueDate(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Priority"
//         value={priority}
//         onChangeText={(text) => setPriority(text)}
//       />
//       <Button title="Add Task" onPress={addTask} color="black"/>
//       <Text style={styles.taskListHeader}>Your Tasks:</Text>
//       <ScrollView style={styles.taskList}>
//         {tasks.map((task) => (
//           <View key={task.id} style={styles.task}>
//             <Text style={styles.taskTitle}>{task.title}</Text>
//             <Text>{task.description}</Text>
//             <Text>Due Date: {task.dueDate}</Text>
//             <Text>Priority: {task.priority}</Text>
//             {!task.completed && (
//               <Button
//                 title="Mark as Completed"
//                 onPress={() => markTaskAsCompleted(task.id)}
//               />
//             )}
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   taskListHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   taskList: {
//     marginBottom: 20,
//   },
//   task: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   taskTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// });








// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button, ScrollView, ImageBackground, Image } from 'react-native';

// // Import your local background image
// import backgroundImage from './assets/todolistimage.jpeg'; // Update the filename as needed

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('');

//   const addTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title,
//       description,
//       dueDate,
//       priority,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//     setPriority('');
//   };

//   const markTaskAsCompleted = (taskId) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, completed: true };
//       }
//       return task;
//     });

//     setTasks(updatedTasks);
//   };

//   return (
//     <ImageBackground
//       source={backgroundImage}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//         <Text style={styles.header}>Task Management App</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Title"
//           value={title}
//           onChangeText={(text) => setTitle(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Description"
//           value={description}
//           onChangeText={(text) => setDescription(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Due Date"
//           value={dueDate}
//           onChangeText={(text) => setDueDate(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Priority"
//           value={priority}
//           onChangeText={(text) => setPriority(text)}
//         />
//         <Button
//           title="Add Task"
//           onPress={addTask}
//           color="#007AFF"
//         />
//         <Text style={styles.taskListHeader}>Your Tasks:</Text>
//         <ScrollView style={styles.taskList}>
//           {tasks.map((task) => (
//             <View key={task.id} style={styles.task}>
//               <Text style={styles.taskTitle}>{task.title}</Text>
//               <Text>{task.description}</Text>
//               <Text>Due Date: {task.dueDate}</Text>
//               <Text>Priority: {task.priority}</Text>
//               {!task.completed && (
//                 <Button
//                   title="Mark as Completed"
//                   onPress={() => markTaskAsCompleted(task.id)}
//                 />
//               )}
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   taskListHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//     color: '#333',
//   },
//   taskList: {
//     marginBottom: 20,
//   },
//   task: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   taskTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//   },
// });

// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button, ScrollView, ImageBackground, Image } from 'react-native';

// // Import your local background image
// import backgroundImage from './assets/todolistimage.jpeg'; // Update the filename as needed

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [priority, setPriority] = useState('');

//   const addTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title,
//       description,
//       dueDate,
//       priority,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTitle('');
//     setDescription('');
//     setDueDate('');
//     setPriority('');
//   };

//   const markTaskAsCompleted = (taskId) => {
//     const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return { ...task, completed: true };
//       }
//       return task;
//     });

//     setTasks(updatedTasks);
//   };

//   return (
//     <ImageBackground
//       source={backgroundImage}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//         <Text style={styles.header}>Task Management App</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Title"
//           value={title}
//           onChangeText={(text) => setTitle(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Description"
//           value={description}
//           onChangeText={(text) => setDescription(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Due Date"
//           value={dueDate}
//           onChangeText={(text) => setDueDate(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Priority"
//           value={priority}
//           onChangeText={(text) => setPriority(text)}
//         />
//         <Button
//           title="Add Task"
//           onPress={addTask}
//           color="black"
//         />
//         <Text style={styles.taskListHeader}>Your Tasks:</Text>
//         <ScrollView style={styles.taskList}>
//           {tasks.map((task) => (
//             <View key={task.id} style={styles.task}>
//               <Text style={styles.taskTitle}>{task.title}</Text>
//               <Text>{task.description}</Text>
//               <Text>Due Date: {task.dueDate}</Text>
//               <Text>Priority: {task.priority}</Text>
//               {!task.completed && (
//                 <Button
//                   title="Mark as Completed"
//                   onPress={() => markTaskAsCompleted(task.id)}
//                 />
//               )}
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   taskListHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//     color: '#333',
//   },
//   taskList: {
//     marginBottom: 20,
//   },
//   task: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
//   },
//   taskTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, ImageBackground, Image } from 'react-native';

import backgroundImage from './assets/todolistimage.jpeg';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      dueDate,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
  };

  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Task Management App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Due Date"
          value={dueDate}
          onChangeText={(text) => setDueDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Priority"
          value={priority}
          onChangeText={(text) => setPriority(text)}
        />
        <Button
          title="Add Task"
          onPress={addTask}
          color="black"
        />
        <Text style={styles.taskListHeader}>Your Tasks:</Text>
        <ScrollView style={styles.taskList}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.task}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text>{task.description}</Text>
              <Text>Due Date: {task.dueDate}</Text>
              <Text>Priority: {task.priority}</Text>
              {!task.completed && (
                <Button
                  title="Mark as Completed"
                  onPress={() => markTaskAsCompleted(task.id)}
                  color="black" // Set the text color to black
                />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  taskListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  taskList: {
    marginBottom: 20,
  },
  task: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
});

