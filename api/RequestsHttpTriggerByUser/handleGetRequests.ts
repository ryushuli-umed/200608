import { Context } from '@azure/functions';

interface HTTPResponse {
  body: string;
  status: number;
}

const handleGetRequests = async (context: Context): Promise<HTTPResponse> => {
  return {
    body: JSON.stringify([
      {
        requestId: '1',
        date: '20200501',
        time: '午前',
        place: '東京',
        salary: 20000,
        speciality: '小児科',
      },
      {
        requestId: '3',
        date: '20200503',
        time: '午前',
        place: '東京',
        salary: 20000,
        speciality: '皮膚科',
      },
    ]),
    status: 200,
  };
};

export default handleGetRequests;
