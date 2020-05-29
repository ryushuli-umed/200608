import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import handleGetProfile from './handleGetProfile';
import handlePutProfile from './handlePutProfile';
import handlePostProfile from './handlePostProfile';

interface HTTPResponse {
  body?: string;
  status: number;
}

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<HTTPResponse> => {
  switch (req.method) {
    case 'GET':
      return handleGetProfile(context);
    case 'PUT':
      return handlePutProfile(context);
    case 'POST':
      return handlePostProfile(context);
    default:
      return {
        status: 405,
      };
  }
};

export default httpTrigger;
