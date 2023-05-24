import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

const buildClient = ({
  req: { headers },
}: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  return axios.create({
    baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/',
    headers,
  });
};

export default buildClient;
