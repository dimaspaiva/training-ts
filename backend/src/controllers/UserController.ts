import { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [{ name: 'Dimas Paiva', email: 'dimasalpaiva@gmail.com' }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        email: 'dimasalpaiva@gmail.com',
        name: 'Dimas Paiva'
      },
      message: {
        subject: 'Welcome to system',
        body: 'Welcome'
      }
    });

    res.send();
  }
};
