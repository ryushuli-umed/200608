import { Context } from '@azure/functions';

interface HTTPResponse {
  body: string;
  status: number;
}

const handleGetProfile = async (context: Context): Promise<HTTPResponse> => {
  return {
    body: JSON.stringify({
      name: '山下　達郎',
      furigana: 'やました　たつろう',
      doB: '1993年12月29日',
      sex: '男',
      postcode: '104-0031',
      address: '東京都中央区京橋1-6-13 BTS OFFICE 6F',
      phone: '080-1234-5678',
      email: 'SAMPLE@JMED.JP',
      yearDoctor: '2016',
      university: '東京大学',
      speciality: '小児科',
    }),
    status: 200,
  };
};

export default handleGetProfile;
