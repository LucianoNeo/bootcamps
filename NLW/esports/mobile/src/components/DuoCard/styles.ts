import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight:16,
    alignItems:'center'
  },
  label:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4
  },
  value:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    
  },
  button:{
    width: '100%',
    height: 36,
    borderRadius:6,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonTitle:{
    color: THEME.COLORS.TEXT,
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8
  }

});