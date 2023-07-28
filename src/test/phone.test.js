import supertest from 'supertest';
import { web } from '../app/web.js';
import { logger } from '../app/logging.js';

// describe('POST /api/phone/create', function () {
//   it('should can create new phone', async () => {
//     const result = await supertest(web)
//       .post('/api/phone/create')
//       .send({
//         name: 'Realme C3',
//         brand: 'Realme',
//         RAM: '2',
//         room: '32',
//         processor: 'Mediatek Helio',
//         price: '1.400.000',
//         image: 'img.jpg',
//         camera: ' 12px 8px',
//         category: 'Entry Level',
//         desc: '',
//         link: '',
//         release_date: '',
//         A1: 1,
//         A2: 2,
//         A3: 3,
//         A4: 4,
//         A5: 5,
//       });
//     logger.info(result.status);
//     expect(result.status).toBe(200);
//     expect(result.body.data.brand).toBe('Realme');
//   });
// });

describe('GET /api/phone/data', function () {
  it('should get all phones', async () => {
    const result = await supertest(web).get('/api/phone/data');
    logger.info(result.body);
    expect(result.status).toBe(200);
  });
});
