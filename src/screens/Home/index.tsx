import { useState, useRef } from "react";
import { View, Text, FlatList, Keyboard } from "react-native";
import { styles } from "./styles"

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Task } from "../../components/Task";
import { Empty } from "../../components/Empty";

export type TaskProps = {
    id: string;
    title: string;
    isChecked: boolean;
}

export function Home() {
    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    function handleCreateTask() {
        const newTask = {
            id: String(Math.random()),
            title: inputTask,
            isChecked: false
        };
        setTasks(prevState => [...prevState, newTask]);

        Keyboard.dismiss();
        setInputTask('');
    }

    function handleCheckedTask(id: string) {
        setTasks(prevState => prevState.map(task => {
            if (task.id === id) return { ...task, isChecked: !task.isChecked }

            return task;
        }));
    }

    function handleRemoveTask(id: string) { 
        setTasks(prevState => prevState.filter(task => task.id !== id));
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.form}>
                <Input 
                    placeholder="Adicione uma nova tarefa"
                    value={inputTask}
                    onChangeText={setInputTask}
                />
                <Button 
                    onPress={handleCreateTask}
                />
            </View>
            
            <View style={styles.headerTask}>
                <View style={styles.containerCount}>
                    <Text style={styles.titleCount}>Criadas</Text>

                    <View style={styles.bubbleCount}>
                        <Text style={styles.count}>{tasks.length}</Text>
                    </View>
                </View>

                <View style={styles.containerCount}>
                    <Text style={[styles.titleCount, {color: "#8284FA"}]}>Concluídas</Text>

                    <View style={styles.bubbleCount}>
                        <Text style={styles.count}>
                            {tasks.reduce((acc, task) => {
                                if (task.isChecked) {
                                    return acc + 1;
                                }
                                return acc;
                            }, 0)}
                        </Text>
                    </View>
                </View>
            </View>

            <FlatList 
                data={tasks}
                keyExtractor={item => String(item.id)}
                style={styles.containerTask}
                contentContainerStyle={styles.contentTask}
                renderItem={({ item }) => (
                    <Task 
                        task={item}
                        onChecked={() => handleCheckedTask(item.id)} 
                        onRemove={() => handleRemoveTask(item.id)}
                    />
                )}
                ListEmptyComponent={() => <Empty />}
            />
        </View>
    );
}