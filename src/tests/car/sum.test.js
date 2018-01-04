import buyCarAction from '../../app/car/services/buy_car_service'


test('buy car action', () => {
	// console.log();

	expect(buyCarAction().type).toBe('BUY_CAR');
});