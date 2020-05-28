import { Context } from '@azure/functions';

const handleDeleteRequest = async (context: Context): Promise<void> => {
  context.res = {
    status: 200,
  };
};

export default handleDeleteRequest;
