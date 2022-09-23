import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  closeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  rateButton: {
    backgroundColor: '#1EB0F7',
    padding: 10,
    marginBottom: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  rateText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  feedbackButton: {
    alignItems: 'center',
  },
  feedbackText: {
    textDecorationLine: 'underline',
  },
});
