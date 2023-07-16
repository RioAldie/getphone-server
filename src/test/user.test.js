import supertest from 'supertest';
import { prismaClient } from '../app/database.js';
import { web } from '../app/web.js';
import { logger } from '../app/logging.js';

describe('POST /api/users', function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: 'rioaldie',
      },
    });
  });

  it('should can register new user', async () => {
    const result = await supertest(web).post('/api/users').send({
      username: 'rioaldie',
      password: 'rahasia',
      name: 'Rio Aldi',
    });
    logger.info(result.body);
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe('rioaldie');
    expect(result.body.data.name).toBe('Rio Aldi');
    expect(result.body.data.password).toBeUndefined();
  });
  it('should can register new user', async () => {
    const result = await supertest(web).post('/api/users').send({
      username: '',
      password: '',
      name: '',
    });
    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.error).toBeDefined();
  });
});
