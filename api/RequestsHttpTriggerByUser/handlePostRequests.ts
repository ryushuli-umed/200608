import { Context } from '@azure/functions';

interface HTTPResponse {
  status: number;
}

const handlePostRequests = async (context: Context): Promise<HTTPResponse> => {
  return {
    status: 201,
  };
};

export default handlePostRequests;
