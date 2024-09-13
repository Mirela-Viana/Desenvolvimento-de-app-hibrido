import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { Avatar } from "../components/avatar";
import { styles } from "./styles";

export type ContactProps ={
    name: string
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContactProps
}
export function Contact( {contact, ...rest} :  Props) 
    {
        return <TouchableOpacity style={styles.container}
    >
    <Avatar name= "Pedroso" image={contact.image}/>
        <Text style = {styles.name}>{contact.name}</Text>
    </TouchableOpacity>
}
