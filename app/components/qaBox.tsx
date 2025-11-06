import { View, Text, StyleSheet } from 'react-native'

interface QaBoxProps {
  title: string;
  content: string;
  question: string;
}

const QaBox: React.FC<QaBoxProps> = ({ title, content, question }) => {
  return (
    <View style = {{alignContent: 'center'}}>
      <View style={{borderRadius: 20, backgroundColor: '#d8d8d8ff', height: 200, width: 345, borderWidth: 4, justifyContent: 'space-between'}}>
        <View style={styles.headerRow}>
          {/* Circle + title section */}
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <View style={styles.circle} />
          </View>
          {/* section ends here */}
          
          <View style={{flex: 1}}>
            <Text>
              {title}
            </Text>
          </View>
          <View style={{flex: 4, alignItems: 'flex-end'}}>
            <Text>
              {content}
            </Text>
          </View>
        </View>
        <View style={{padding: 20, borderRadius: 20, backgroundColor: '#FFF', height: 200, width: 350, borderWidth: 4}}>
          <Text style={{fontSize: 25, fontStyle: 'italic'}}>
            Q: {question}
          </Text>
          <Text style={{marginTop: 20}}>
            {content}
          </Text>
        </View>
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
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#b33e2cff',
    borderWidth: 4,
  },
});