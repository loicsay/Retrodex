import React, { Dispatch, FC, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import PokemonSeparator from '../PokemonSeparator';
import ActionMenu from './ActionMenu';
import MenuSeparator from './MenuSeparator';
import SettingsMenu from './SettingsMenu';
import ViewMenu from './ViewMenu';

interface Props {
  currentAction: 'data' | 'cry';
  setAction: Dispatch<SetStateAction<'data' | 'cry'>>;
}

const Menu: FC<Props> = ({ currentAction, setAction }) => (
  <>
    <PokemonSeparator />
    <View style={styles.menuContainer}>
      <ViewMenu style={styles.menu} />
      <MenuSeparator />
      <ActionMenu
        style={styles.menu}
        currentAction={currentAction}
        setAction={setAction}
      />
      <MenuSeparator />
      <SettingsMenu style={styles.menu} />
    </View>
  </>
);

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
  menu: {
    marginTop: 28,
    paddingBottom: 15,
  },
});

export default Menu;
