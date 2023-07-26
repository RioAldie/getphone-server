import supertest from 'supertest';
import { web } from '../app/web.js';
import { logger } from '../app/logging.js';
import { createTestUser, removeTestUser } from './test.util.js';

describe('POST /api/users', function () {
  afterEach(async () => {
    await removeTestUser();
  });

  it('should can register new user', async () => {
    const result = await supertest(web).post('/api/users').send({
      username: 'test',
      password: 'rahasia',
      name: 'Rio Aldi',
    });
    logger.info(result.status);
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe('test');
    expect(result.body.data.name).toBe('Rio Aldi');
    expect(result.body.data.password).toBeUndefined();
  });
  it('should cant register new user', async () => {
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

describe('POST /api/users/login', function () {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });
  it('should can login', async () => {
    const result = await supertest(web)
      .post('/api/users/login')
      .send({
        username: 'test',
        password: 'rahasia',
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe('test');
  });
});
describe('GET /api/users/data', function () {
  it('should get users data', async () => {
    const result = await supertest(web).get('/api/users/data');
    logger.info(result.body);
    expect(result.status).toBe(200);
  });
});
