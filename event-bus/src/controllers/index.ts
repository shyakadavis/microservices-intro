import { Request, Response } from 'express';
import axios from 'axios';

const events: any = [];

export const handleEvent = (req: Request, res: Response) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:8080/events', event).catch((err) => {
    console.error(err.message);
  });
  axios.post('http://localhost:8081/events', event).catch((err) => {
    console.error(err.message);
  });
  axios.post('http://localhost:8082/events', event).catch((err) => {
    console.error(err.message);
  });
  axios.post('http://localhost:8083/events', event).catch((err) => {
    console.error(err.message);
  });

  res.send({ status: 'OK' });
};
export const getEvents = async (req: Request, res: Response) => {
  res.send(events);
};
