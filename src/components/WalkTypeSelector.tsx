import {FC, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import IconButton from "./IconButton";

interface WalkTypeSelectorProps {
    walkType: string;
    onWalkTypeChange: (walkType: string) => void;
}

const WalkTypeSelector: FC<WalkTypeSelectorProps> = ({onWalkTypeChange, walkType}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>I’d like to go on a:</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <IconButton label="One-on-one walk" onPress={() => onWalkTypeChange('one-on-one')} selected={walkType === 'one-on-one'} />
                <IconButton label="Group walk" onPress={() => onWalkTypeChange('group-walk')} selected={walkType === 'group-walk'} />
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
      marginTop: 20,
        marginBottom: 20
    },
    titleContainer: {
      marginBottom: 5
    },
    title: {
        color: '#686868',
        fontSize: 15,
        fontWeight: '600'
    },
    buttonsContainer: {
        flexDirection: 'row',
    }
})

export default WalkTypeSelector;
