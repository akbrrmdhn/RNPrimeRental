import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  progress: {
    marginTop: 70,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    paddingBottom: 10,
    marginHorizontal: 10,
  },
  successContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    marginHorizontal: 10,
  },
  textInput: {
    width: '100%',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    marginVertical: 10,
    fontFamily: 'Nunito-Regular',
  },
  buttonPosition: {
    marginTop: -60,
    paddingBottom: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFCD61',
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  details: {
    alignItems: 'flex-start',
  },
  detailsText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginVertical: 5,
  },
  borderBottom: {
    borderBottomColor: '#DFDEDE',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  priceText: {
    fontFamily: 'Nunito-Black',
    fontSize: 36,
  },
  paymentCodeSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentHeading: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  paymentCode: {
    fontFamily: 'Nunito-Black',
    fontSize: 36,
  },
  paymentSubtext: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    textAlign: 'center',
  },
  timer: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
    color: '#9B0A0A',
  },
  bankAccountHeading: {
    fontFamily: 'Nunito-Black',
    fontSize: 16,
    color: '#616167',
  },
  bankAccount: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
  },
  bookingCode: {
    fontFamily: 'Nunito-Black',
    fontSize: 16,
  },
  bookingSubtext: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: '#616167',
  },
  copyBookingCode: {
    backgroundColor: '#FFCD61',
    marginVertical: 10,
    width: '70%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  copyBookingCodeText: {
    fontFamily: 'Nunito-Black',
    fontSize: 12,
  },
  orderDetails: {
    marginVertical: 10,
  },
  orderDetailsText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#616167',
    marginVertical: 5,
  },
  paymentStatus: {
    fontFamily: 'Nunito-Black',
    fontSize: 24,
    marginVertical: 20,
    color: '#228C22',
    textAlign: 'center',
  },
  paymentStatusSucceed: {
    paddingTop: 100,
    fontFamily: 'Nunito-Black',
    fontSize: 24,
    marginVertical: 20,
    color: '#228C22',
    textAlign: 'center',
  },
});
