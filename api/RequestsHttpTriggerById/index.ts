import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import handleDeleteRequests from './handleDeleteRequests';
import handleGetRequests from './handleGetRequests';

interface HTTPResponse {
  body?: string;
  status: number;
}

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<HTTPResponse> => {
  switch (req.method) {
    case 'GET':
      return handleGetRequests(context);
    case 'DELETE':
      return handleDeleteRequests(context);
    default:
      return {
        status: 405,
      };
  }
};

export default httpTrigger;
