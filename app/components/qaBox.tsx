import { View, Text, StyleSheet } from 'react-native'

interface QaBoxProps {
  title: string;
  content: string;
  question: string;
}

const QaBox: React.FC<QaBoxProps> = ({ title, content, question }) => {
  return (
    <View style={{borderRadius: 20, backgroundColor: '#d8d8d8ff', height: 75, borderWidth: 1}}>
      <View style={styles.headerRow}>
        <View style={{flex: 1}}>
          <Text>
            {title}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text>
            {content}
          </Text>
        </View>
      </View>
      <View style={{padding: 20, borderRadius: 20, backgroundColor: '#FFF', height: 300, borderWidth: 1}}>
        <Text style={{fontSize: 25}}>
          Q: {question}
        </Text>
        <Text style={{marginTop: 20}}>
          {content}
        </Text>
      </View>
    </View>
    
  );
};

export default QaBox;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    padding: 10,
    width: 350,
    height: 'auto',
    backgroundColor: "",
  }
});