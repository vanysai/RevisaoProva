import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../assets/styles';
import { nomes } from '../constants/nomes';
import NomeItem from '../components/NomeItem';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lista de Nomes</Text>
            <FlatList
                data={nomes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <NomeItem nome={item} />}
                />
        </View>
    );
};

export default HomeScreen;