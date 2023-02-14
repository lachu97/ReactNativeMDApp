import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, Text, IconButton, MD3Colors,Chip,Snackbar   } from 'react-native-paper'
export const ButtonComponent = () => {
    return (
        <Button
            icon="camera"
            mode='outlined'
            buttonColor='violet'
            textColor='black'
            onPress={() => { alert('Button clicked') }}>
            Press Me
        </Button>
    )
}
export const IconButtonComponent = () => {
    return (
        <IconButton
            icon="camera"
            mode='outlined'
            containerColor='lightgrey'
            iconColor={MD3Colors.error50}
            size={46}
            onPress={() => console.log('Pressed')}
        />
    )
}
export const Customchips = () =>{
    return (
        <Chip
         icon="information" 
        onPress={() => console.log('Pressed')}>Example Chip</Chip>
    )
}
export const SnackBar = () => {
    const [visible, setVisible] = React.useState(false);
  
    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);
  
    return (
      <View style={styles.container}>
        <Button 
        buttonColor='violet'
        textColor='black'
        onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
  });