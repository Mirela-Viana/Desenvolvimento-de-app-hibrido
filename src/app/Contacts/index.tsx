import { Text, TouchableOpacity } from "react-native";
import { Avatar } from "../components/avatar";
import { styles } from "./styles";

export function Contact() {
    return <TouchableOpacity style={styles.container}
    >
    <Avatar name= "Pedroso" image={require("@/Assets/avatar.jpeg")}/>
        <Text style = {styles.name}>Pedroso</Text>
    </TouchableOpacity>
}
