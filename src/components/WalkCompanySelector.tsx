import {FC, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import IconButton from "./IconButton";

interface WalkCompanySelectorProps {
    walkType: string;
    walkCompany: string[];
    onChange: (walkCompany: string) => void;
}

const WalkCompanySelector: FC<WalkCompanySelectorProps> = ({walkCompany, walkType,onChange}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>I’d like to walk with:</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <IconButton label="Friends" onPress={() => onChange('friends')} selected={walkCompany.includes('friends')} selectedColor='#8D65FF' />
                {
                    walkType === 'one-on-one' ?
                    <IconButton label="Friends of friends" onPress={() => onChange('friends-of-friends')} selected={walkCompany.includes('friends-of-friends')} selectedColor='#8D65FF' /> :
                        <IconButton label="Friends and their friends" onPress={() => onChange('friends-of-their-friends')} selected={walkCompany.includes('friends-of-their-friends')} selectedColor='#8D65FF' />
                }
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        marginTop: 10,
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

export default WalkCompanySelector;
