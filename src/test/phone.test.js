import supertest from 'supertest';
import { web } from '../app/web.js';
import { logger } from '../app/logging.js';

describe('POST /api/phone/create', function () {
  it('should can create new phone', async () => {
    const result = await supertest(web)
      .post('/api/phone/create')
      .send({
        name: 'Redmi Note 11',
        brand: 'Xiaomi',
        RAM: '4',
        room: '128',
        processor: 'Snapdragon 660',
        price: '2.600.000',
        image: 'img.jpg',
        camera: '48px 12px 8px',
        category: 'Entry Level',
        desc: '',
        link: '',
        release_date: '',
        A1: 1,
        A2: 2,
        A3: 3,
        A4: 4,
        A5: 5,
      });
    logger.info(result.status);
    expect(result.status).toBe(200);
    expect(result.body.data.brand).toBe('Xiaomi');
  });
});
