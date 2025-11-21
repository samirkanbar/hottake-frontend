import { View, Text, StyleSheet } from 'react-native'

interface QaBoxProps {
  title: string;
  content: string;
  question: string;
}

const QaBox: React.FC<QaBoxProps> = ({ title, content, question }) => {
  return (
    <View style = {{alignContent: 'center'}}>
      <View style={{borderRadius: 20, backgroundColor: '#d8d8d8ff', height: 180, width: 350, borderWidth: 4, alignItems: 'center'}}>
        <View style={styles.headerRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <View style={styles.circle} />
              <Text style={{fontSize: 20, color: '#7a6969ff'}}>{title}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1}}>
              <Text style={{fontSize: 20, color: '#7a6969ff'}}>
                Q&A
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{padding: 10, borderRadius: 20, backgroundColor: '#FFF', height: 180, width: 350, borderWidth: 4, position: 'absolute', top: 50}}>
        <Text style={{fontSize: 25, fontStyle: 'italic'}}>
          Q: {question}
        </Text>
        <Text style={{fontSize: 25, fontStyle: 'italic', marginTop: 20}}>
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
    padding: 7,
    width: 345,
    height: 'auto',
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#cb432bff',
    borderWidth: 3,
  },
});