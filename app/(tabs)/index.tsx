import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import Button from '../../components/ui/atoms/Button';
import Icon from '../../components/ui/ions/icon';
import Typography from '../../components/ui/ions/text';

export default function HomeScreen() {
  const [value, setValue] = React.useState('');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Typography h1 bold center color="#2E86AB">
          GalioModern Components
        </Typography>
        <Typography p muted center>
          Comprehensive Test Suite for UI Components
        </Typography>
      </View>

      {/* Typography Section */}
      <View style={styles.section}>
        <Typography h2 bold color="#2E86AB">
          📝 Typography Components
        </Typography>
        
        {/* Headings */}
        <View style={styles.subsection}>
          <Typography h3 bold>Headings</Typography>
          <Typography h1>Heading 1 - Main Title</Typography>
          <Typography h2>Heading 2 - Section Title</Typography>
          <Typography h3>Heading 3 - Subsection</Typography>
          <Typography h4>Heading 4 - Minor Section</Typography>
          <Typography h5>Heading 5 - Small Section</Typography>
          <Typography h6>Heading 6 - Tiny Section</Typography>
        </View>

        {/* Text Styles */}
        <View style={styles.subsection}>
          <Typography h3 bold>Text Styles</Typography>
          <Typography p>Paragraph text - Normal body text</Typography>
          <Typography body>Body text - Smaller than paragraph</Typography>
          <Typography small>Small text - For captions and notes</Typography>
          <Typography p bold>Bold text - For emphasis</Typography>
          <Typography p italic>Italic text - For quotes or emphasis</Typography>
          <Typography p bold italic>Bold & Italic - Maximum emphasis</Typography>
        </View>

        {/* Text Colors */}
        <View style={styles.subsection}>
          <Typography h3 bold>Text Colors</Typography>
          <Typography p color="#FF6B6B">Red text</Typography>
          <Typography p color="#4ECDC4">Teal text</Typography>
          <Typography p color="#45B7D1">Blue text</Typography>
          <Typography p color="#96CEB4">Green text</Typography>
          <Typography p color="#FFEAA7">Yellow text</Typography>
          <Typography p muted>Muted text</Typography>
          <Typography p neutral>Neutral text</Typography>
        </View>

        {/* Text Alignment */}
        <View style={styles.subsection}>
          <Typography h3 bold>Text Alignment</Typography>
          <Typography p center>Center aligned text</Typography>
          <Typography p>Left aligned text (default)</Typography>
          <Typography p center color="#FF6B6B" bold>Centered bold red text</Typography>
        </View>

        {/* Custom Sizes */}
        <View style={styles.subsection}>
          <Typography h3 bold>Custom Sizes</Typography>
          <Typography size={8}>8px text</Typography>
          <Typography size={12}>12px text</Typography>
          <Typography size={16}>16px text</Typography>
          <Typography size={20}>20px text</Typography>
          <Typography size={24}>24px text</Typography>
          <Typography size={32}>32px text</Typography>
        </View>

        {/* Text with Shadow */}
        <View style={styles.subsection}>
          <Typography h3 bold>Text with Shadow</Typography>
          <Typography h2 shadow color="#2E86AB" center>
            Shadowed Text
          </Typography>
          <Typography p shadow color="#FF6B6B" center>
            Red shadowed text
          </Typography>
        </View>
      </View>

      {/* Icon Section */}
      <View style={styles.section}>
        <Typography h2 bold color="#2E86AB">
          🎨 Icon Components
        </Typography>

        {/* Different Icon Families */}
        <View style={styles.subsection}>
          <Typography h3 bold>Icon Families</Typography>
          <View style={styles.iconRow}>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="heart" size={30} color="#FF6B6B" />
              <Typography small center>AntDesign</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="Entypo" name="star" size={30} color="#FFD93D" />
              <Typography small center>Entypo</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="EvilIcons" name="like" size={30} color="#4ECDC4" />
              <Typography small center>EvilIcons</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="Feather" name="home" size={30} color="#45B7D1" />
              <Typography small center>Feather</Typography>
            </View>
          </View>

          <View style={styles.iconRow}>
            <View style={styles.iconItem}>
              <Icon family="FontAwesome" name="rocket" size={30} color="#FF6B6B" />
              <Typography small center>FontAwesome</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="Foundation" name="social-twitter" size={30} color="#1DA1F2" />
              <Typography small center>Foundation</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="Ionicons" name="heart" size={30} color="#FF6B6B" />
              <Typography small center>Ionicons</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="MaterialIcons" name="favorite" size={30} color="#E91E63" />
              <Typography small center>MaterialIcons</Typography>
            </View>
          </View>
        </View>

        {/* Icon Sizes */}
        <View style={styles.subsection}>
          <Typography h3 bold>Icon Sizes</Typography>
          <View style={styles.iconRow}>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="star" size={16} color="#FFD93D" />
              <Typography small center>16px</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="star" size={24} color="#FFD93D" />
              <Typography small center>24px</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="star" size={32} color="#FFD93D" />
              <Typography small center>32px</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="star" size={48} color="#FFD93D" />
              <Typography small center>48px</Typography>
            </View>
          </View>
        </View>

        {/* Icon Colors */}
        <View style={styles.subsection}>
          <Typography h3 bold>Icon Colors</Typography>
          <View style={styles.iconRow}>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="heart" size={30} color="#FF6B6B" />
              <Typography small center>Red</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="heart" size={30} color="#4ECDC4" />
              <Typography small center>Teal</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="heart" size={30} color="#45B7D1" />
              <Typography small center>Blue</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="heart" size={30} color="#96CEB4" />
              <Typography small center>Green</Typography>
            </View>
          </View>
        </View>

        {/* Popular Icons */}
        <View style={styles.subsection}>
          <Typography h3 bold>Popular Icons</Typography>
          <View style={styles.iconRow}>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="home" size={30} color="#2E86AB" />
              <Typography small center>Home</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="user" size={30} color="#2E86AB" />
              <Typography small center>User</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="setting" size={30} color="#2E86AB" />
              <Typography small center>Settings</Typography>
            </View>
            <View style={styles.iconItem}>
              <Icon family="AntDesign" name="search1" size={30} color="#2E86AB" />
              <Typography small center>Search</Typography>
            </View>
          </View>
        </View>
      </View>

      {/* Button Section */}
      <View style={styles.section}>
        <Typography h2 bold color="#2E86AB">
          🔘 Button Components
        </Typography>

        {/* Button Colors */}
        <View style={styles.subsection}>
          <Typography h3 bold>Button Colors</Typography>
          <Button color="primary" style={styles.button}>
            <Typography color="white">Primary Button</Typography>
          </Button>
          <Button color="info" style={styles.button}>
            <Typography color="white">Info Button</Typography>
          </Button>
          <Button color="danger" style={styles.button}>
            <Typography color="white">Danger Button</Typography>
          </Button>
          <Button color="warning" style={styles.button}>
            <Typography color="white">Warning Button</Typography>
          </Button>
          <Button color="success" style={styles.button}>
            <Typography color="white">Success Button</Typography>
          </Button>
          <Button color="white" style={styles.button}>
            <Typography color="black">White Button</Typography>
          </Button>
          <Button color="black" style={styles.button}>
            <Typography color="white">Black Button</Typography>
          </Button>
          <Button color="transparent" style={{ marginVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: '#2E86AB' }}>
            <Typography color="#2E86AB">Transparent Button</Typography>
          </Button>
        </View>

        {/* Button Sizes */}
        <View style={styles.subsection}>
          <Typography h3 bold>Button Sizes</Typography>
          <Button color="primary" size="large" style={styles.button}>
            <Typography color="white" bold>Large Button</Typography>
          </Button>
          <Button color="primary" size="default" style={styles.button}>
            <Typography color="white">Default Button</Typography>
          </Button>
          <Button color="primary" size="small" style={styles.button}>
            <Typography color="white" small>Small Button</Typography>
          </Button>
        </View>

        {/* Button with Icons */}
        <View style={styles.subsection}>
          <Typography h3 bold>Buttons with Icons</Typography>
          <Button 
            color="primary" 
            icon="heart" 
            iconFamily="AntDesign"
            style={styles.button}
          >
            <Typography color="white">Like Button</Typography>
          </Button>
          <Button 
            color="success" 
            icon="check" 
            iconFamily="AntDesign"
            style={styles.button}
          >
            <Typography color="white">Confirm Button</Typography>
          </Button>
          <Button 
            color="danger" 
            icon="close" 
            iconFamily="AntDesign"
            style={styles.button}
          >
            <Typography color="white">Cancel Button</Typography>
          </Button>
          <Button 
            color="info" 
            icon="arrowright" 
            iconFamily="AntDesign"
            iconRight
            style={styles.button}
          >
            <Typography color="white">Next Button</Typography>
          </Button>
        </View>

        {/* Icon Only Buttons */}
        <View style={styles.subsection}>
          <Typography h3 bold>Icon Only Buttons</Typography>
          <View style={styles.iconButtonRow}>
            <Button 
              color="primary" 
              icon="home" 
              iconFamily="AntDesign"
              onlyIcon
              style={styles.iconButton}
            />
            <Button 
              color="success" 
              icon="check" 
              iconFamily="AntDesign"
              onlyIcon
              style={styles.iconButton}
            />
            <Button 
              color="danger" 
              icon="close" 
              iconFamily="AntDesign"
              onlyIcon
              style={styles.iconButton}
            />
            <Button 
              color="warning" 
              icon="star" 
              iconFamily="AntDesign"
              onlyIcon
              style={styles.iconButton}
            />
          </View>
        </View>

        {/* Button States */}
        <View style={styles.subsection}>
          <Typography h3 bold>Button States</Typography>
          <Button color="primary" style={styles.button}>
            <Typography color="white">Normal Button</Typography>
          </Button>
          <Button color="primary" disabled style={styles.button}>
            <Typography color="white">Disabled Button</Typography>
          </Button>
          <Button color="primary" loading style={styles.button}>
            <Typography color="white">Loading Button</Typography>
          </Button>
          <Button color="primary" loading loadingSize="large" style={styles.button}>
            <Typography color="white">Large Loading</Typography>
          </Button>
        </View>

        {/* Round Buttons */}
        <View style={styles.subsection}>
          <Typography h3 bold>Round Buttons</Typography>
          <Button color="primary" round style={styles.button}>
            <Typography color="white">Round Button</Typography>
          </Button>
          <Button 
            color="success" 
            icon="check" 
            iconFamily="AntDesign"
            round
            onlyIcon
            style={styles.iconButton}
          />
        </View>

        {/* Text Transform */}
        <View style={styles.subsection}>
          <Typography h3 bold>Text Transform</Typography>
          <Button color="primary" uppercase style={styles.button}>
            <Typography color="white">Uppercase Button</Typography>
          </Button>
          <Button color="primary" lowercase style={styles.button}>
            <Typography color="white">Lowercase Button</Typography>
          </Button>
          <Button color="primary" capitalize style={styles.button}>
            <Typography color="white">Capitalize Button</Typography>
          </Button>
        </View>

        {/* Shadowless Buttons */}
        <View style={styles.subsection}>
          <Typography h3 bold>Shadowless Buttons</Typography>
          <Button color="primary" shadowless style={styles.button}>
            <Typography color="white">No Shadow</Typography>
          </Button>
          <Button color="info" shadowless style={styles.button}>
            <Typography color="white">Flat Button</Typography>
          </Button>
        </View>
      </View>

      {/* Interactive Section */}
      <View style={styles.section}>
        <Typography h2 bold color="#2E86AB">
          🎯 Interactive Examples
        </Typography>
        
        <View style={styles.subsection}>
          <Typography h3 bold>Press the buttons below:</Typography>
          <Button 
            color="primary" 
            icon="heart" 
            iconFamily="AntDesign"
            onPress={() => alert('❤️ You pressed the heart button!')}
            style={styles.button}
          >
            <Typography color="white">Press Me!</Typography>
          </Button>
          
          <Button 
            color="success" 
            icon="star" 
            iconFamily="AntDesign"
            onPress={() => alert('⭐ Star button pressed!')}
            style={styles.button}
          >
            <Typography color="white">Star Button</Typography>
          </Button>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Typography p center muted>
          GalioModern Component Library
        </Typography>
        <Typography small center muted>
          Built with React Native & TypeScript
        </Typography>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  section: {
    margin: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      } as any,
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  subsection: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  iconItem: {
    alignItems: 'center',
    padding: 10,
  },
  iconButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    marginVertical: 8,
    borderRadius: 8,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  footer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    marginTop: 20,
  },
});