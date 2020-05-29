import { Context } from '@azure/functions';

interface HTTPResponse {
  body: string;
  status: number;
}

const handleGetRequests = async (context: Context): Promise<HTTPResponse> => {
  return {
    body: JSON.stringify({
      requestId: '1',
      date: '20200501',
      time: 'AM',
      place: 'tokyo',
      salary: '>20000',
    }),
    status: 200,
  };
};

export default handleGetRequests;
