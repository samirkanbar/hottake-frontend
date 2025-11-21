import { View, Text, StyleSheet } from 'react-native'

interface PollProps {
  title: string;
  content: string;
  question: string;
  option1?: string;
  option2?: string;
}

const Poll: React.FC<PollProps> = ({ title, content, question, option1, option2, }) => {
  return (
    <View style = {{alignContent: 'center', height: 250}}>
      <View style={{borderRadius: 20, backgroundColor: '#d8d8d8ff', height: 180, width: 350, borderWidth: 4, alignItems: 'center'}}>
        <View style={styles.headerRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <View style={styles.circle} />
              <Text style={{fontSize: 20, color: '#7a6969ff'}}>{title}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1}}>
              <Text style={{fontSize: 20, color: '#7a6969ff'}}>
                Poll
              </Text>
            </View>
          </View>
        </View>
      </View>
        <View style={{padding: 10, borderRadius: 20, backgroundColor: '#FFF', height: 180, width: 350, borderWidth: 4, position: 'absolute', top: 50}}>
            <Text style={{fontSize: 25, fontStyle: 'italic'}}>
                Q: {question}
            </Text>
        </View>
        <View style={{borderRadius: 20, backgroundColor: '#aea0a0ff', height: 50, width: 320, position: 'absolute', top: 100, alignSelf: 'center',}}>
            <Text style={{left: 5, top: 10, fontSize: 12, fontWeight: 'bold',}}>
                Option 1: {option1}
            </Text>
        </View>
        <View style={{borderRadius: 20, backgroundColor: '#aea0a0ff', height: 50, width: 320, position: 'absolute', top: 160, alignSelf: 'center',}}>
            <Text style={{left: 5, top: 10, fontSize: 12, fontWeight: 'bold',}}>
                Option 2: {option2}
            </Text>
        </View>
    </View>
  );
};

export default Poll;

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