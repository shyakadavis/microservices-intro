import { Request, Response } from 'express';
import axios from 'axios';

export const handleEvent = (req: Request, res: Response) => {
  const event = req.body;

  axios.post('http://localhost:8080/events', event).catch((err) => {
    console.error(err.message);
  });
  axios.post('http://localhost:8081/events', event).catch((err) => {
    console.error(err.message);
  });
  axios.post('http://localhost:8082/events', event).catch((err) => {
    console.error(err.message);
  });

  res.send({ status: 'OK' });
};
