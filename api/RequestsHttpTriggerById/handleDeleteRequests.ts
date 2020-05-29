import { Context } from '@azure/functions';

interface HTTPResponse {
  status: number;
}

const handleDeleteRequests = async (context: Context): Promise<HTTPResponse> => {
  return {
    status: 200,
  };
};

export default handleDeleteRequests;
