import {FC, useCallback, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import WalkTypeSelector from "../components/WalkTypeSelector";
import WalkCompanySelector from "../components/WalkCompanySelector";

const HomeScreen: FC =() => {
    const [walkType, setWalkType] = useState<string>("one-on-one");
    const [walkCompany, setWalkCompany] = useState<string[]>([]);

    const onWalkTypeChange = useCallback((newWalkType) => {
        setWalkType(newWalkType)
        setWalkCompany([])
    }, [])
    const onWalkCompanyChange = useCallback((newWalkCompany) => {
        if(walkCompany.includes(newWalkCompany)) {
            setWalkCompany(walkCompany.filter((company) => company !== newWalkCompany));
        }else{
            if(walkType === 'one-on-one') {
                setWalkCompany(prev => [...prev, newWalkCompany]);
            }else{
                setWalkCompany(prev => [newWalkCompany]);
            }
        }
    }, [walkCompany, walkType]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Walks</Text>

                <WalkTypeSelector walkType={walkType} onWalkTypeChange={onWalkTypeChange} />
                <WalkCompanySelector walkCompany={walkCompany} walkType={walkType} onChange={onWalkCompanyChange} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        color: "#686868",
        fontSize: 18,
        fontWeight: '600'
    }
})

export default HomeScreen
