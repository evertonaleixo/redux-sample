import CarService from '../../app/car/services/car_service'


test('buy car action', () => {
	expect(CarService.buyCarAction()().type).toBe('BUY_CAR');
});