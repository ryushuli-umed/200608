import { AzureFunction, Context, HttpRequest } from '@azure/functions';

interface HTTPResponse {
  body?: string;
  status: number;
}

const handlePostProfile: AzureFunction = async (context: Context, req: HttpRequest): Promise<HTTPResponse> => {
  if (req.method === 'POST') {
    return {
      status: 201,
    };
  }

  return {
    status: 405,
  };
};

export default handlePostProfile;
