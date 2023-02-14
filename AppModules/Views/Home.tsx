/* eslint-disable prettier/prettier */
import React, { useState,useRef } from 'react'
import { View, StyleSheet, BackHandler, SafeAreaView } from 'react-native';
import { Button, Avatar, TextInput, SegmentedButtons, Card, Dialog, Portal, Text, IconButton, MD3Colors, Chip, Snackbar, Switch } from 'react-native-paper'
import { color } from 'react-native-reanimated';
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
export const Customchips = () => {
  return (
    <Chip
      icon="information"
      onPress={() => console.log('Pressed')}>Example Chip</Chip>
  )
}
export const SwitchComponet = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};


export const SnackBar = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <Button
        buttonColor='violet'
        textColor='black'
        onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible}
        style={styles.snackbar}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            alert('Pressed')
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </>


  );
};
export const SegmentButton = () => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={styles.segmentcontainer}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />
    </SafeAreaView>
  );
};
export const CardActions = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Card style={styles.card}>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
      // left={(props) => <Avatar.Icon {...props} icon="folder" />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
      />
      <Card.Actions>
        <Button onPress={() => alert('Cancel')}  >Cancel</Button>
        <Button onPress={() => alert('Ok')}>Ok</Button>
      </Card.Actions>
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </Card>
  </View>

);
export const TInput = () => {
  const [text, setText] = useState("");
const ref = useRef(null)
  return (
    <TextInput
      style={styles.textInput}
      label="Email"
      value={text}
      mode='outlined'
      onChangeText={text => setText(text)}
      placeholder='Email'
      onBlur={()=>ref.current.value = ''}
      ref={ref}

    />
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  segmentcontainer: {
    flex: 1,
    alignItems: 'center',
    width: '70%',
  },
  snackbar: {
    // width: "100%",
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  card: {
    width: 350,
  },
  textInput: {
    width: 300,
    height: 55
  }
});