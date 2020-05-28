import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import handleDeleteRequest from './handleDeleteRequest';

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
  switch (req.method) {
    case 'DELETE':
      handleDeleteRequest(context);
      break;
    default:
      context.res.status = 405;
  }
};

export default httpTrigger;
