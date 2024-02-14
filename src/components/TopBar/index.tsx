import React from 'react';
import { Appbar } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppContext } from '../../provider';

const TopBar = () => {
  const {
    mode: { awakeMode, setAwakeMode, landscapeMode, setLandscapeMode }
  } = React.useContext(AppContext);

  const navigation = useNavigation();
  const router = useRoute();

  const isTimer = router?.name.includes("Timer");

  return (
    <Appbar.Header
      style={
        Object.assign(isTimer
          ? { borderRadius: 10 }
          : {},
          styles.top)}>
      <Appbar.BackAction size={20} onPress={() => { navigation?.goBack(); }} />
      <Appbar.Content titleStyle={styles.title} title={''} />
      <Appbar.Action size={20} icon={landscapeMode ? 'crop-landscape' : 'cellphone'} onPress={() => {
        setLandscapeMode(!landscapeMode);
      }} />
      <Appbar.Action size={20} icon={awakeMode ? 'flashlight' : 'flashlight-off'} onPress={() => {
        setAwakeMode(!awakeMode);
      }} />
      <Appbar.Action size={20} icon="cog" onPress={() => navigation.navigate({ name: "Settings" } as never)} />
    </Appbar.Header>
  )
}


export default TopBar;