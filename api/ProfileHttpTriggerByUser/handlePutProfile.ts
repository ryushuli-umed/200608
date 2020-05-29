import { Context } from '@azure/functions';

interface HTTPResponse {
  status: number;
}

const handlePutProfile = async (context: Context): Promise<HTTPResponse> => {
  return {
    status: 200,
  };
};

export default handlePutProfile;
