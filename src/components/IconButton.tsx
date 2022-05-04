import {FC} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import CheckIcon from "./CheckIcon";

interface IconButtonProps {
    label: string;
    selected?: boolean
    onPress: () => void
    selectedColor?: string
}

const ICON_SIZE = 18

const IconButton: FC<IconButtonProps> = ({selected, selectedColor, label, onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    {selected && <CheckIcon iconColor={selectedColor} /> }
                </View>
                <View style={styles.labelContainer}>
                    <Text style={[styles.label, selected && {color: selectedColor || '#E68D06'}]}>{label}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        paddingVertical: 10,

        backgroundColor: '#fff',
        shadowColor: "#888",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.0,

        elevation: 3,

        borderRadius: 30,

        marginRight: 10

    },
    iconContainer: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: ICON_SIZE / 2,
        borderColor: '#ECECEC',

        marginRight: 8
    },
    labelContainer: {

    },
    label: {
        fontWeight: '500',
        fontSize: 12,
        color: '#686868'
    },
    selectedLabel: {
        color: '#E68D06'
    }
})

export default IconButton
