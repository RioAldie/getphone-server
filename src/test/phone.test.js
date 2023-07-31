import supertest from 'supertest';
import { web } from '../app/web.js';
import { logger } from '../app/logging.js';

// describe('POST /api/phone/create', function () {
//   it('should can create new phone', async () => {
//     const result = await supertest(web)
//       .post('/api/phone/create')
//       .send({
//         name: 'Redmi Note 11',
//         brand: 'Xiaomi',
//         RAM: '4',
//         room: '128',
//         processor: 'Snapdragon',
//         price: '3.400.000',
//         image: 'img.jpg',
//         camera: '48px 12px 8px',
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
//     expect(result.body.data.brand).toBe('Xiaomi');
//   });
// });

describe('GET /api/phone/data', function () {
  it('should get all phones', async () => {
    const result = await supertest(web).get('/api/phone/data');

    expect(result.status).toBe(200);
  });
});

describe('GET /api/phone/id', function () {
  it('should get phone by id', async () => {
    const result = await supertest(web).get('/api/phone/id').send({
      id: 2,
    });

    expect(result.status).toBe(200);
    expect(result.body.data.name).toBe('Realme C3');
  });
});
describe('GET /api/phone/brand', function () {
  it('should get phones by brand', async () => {
    const result = await supertest(web).get('/api/phone/brand').send({
      brand: 'Xiaomi',
    });

    expect(result.status).toBe(200);
  });
});
describe('PATCH /api/phone/update', function () {
  it('Should update data', async () => {
    const result = await supertest(web)
      .patch('/api/phone/update')
      .send({
        id: 10,
        name: 'Redmi Note 11 Pro',
      });

    expect(result.status).toBe(200);
    expect(result.body.data.name).toBe('Redmi Note 11 Pro');
  });
});

describe('DELETE /api/phone/delete', function () {
  it('Should delete data smartphone', async () => {
    const result = await supertest(web)
      .delete('/api/phone/delete')
      .send({
        id: 5,
      });

    // expect(result.status).toBe(200);
    expect(result.status).toBe(404);
  });
});
