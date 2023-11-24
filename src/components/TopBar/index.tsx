import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();
  const router = useRoute();
  return (
    <Appbar.Header
      style={styles.top}
    >
      {
        navigation?.canGoBack()
        && <Appbar.BackAction onPress={() => { navigation?.goBack(); }} />
      }
      <Appbar.Content titleStyle={styles.title} title={router?.name} />
      <Appbar.Action icon="cog" onPress={() => navigation.navigate({ name: "Settings" } as never)} />
    </Appbar.Header>
  )
}


export default TopBar;