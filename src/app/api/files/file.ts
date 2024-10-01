import { IGetFiles } from '@/interfaces/file';
import api from '@/app/services/api';
import { toast } from 'sonner';

export async function getFiles() {
  try {
    const response = await api.get<IGetFiles>('/files');

    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching data:',
      error.response?.data || error.message || error,
    );

    if (error.response.data.message) toast.error(error.response.data.message);

    throw new Error(error.response?.data.message || 'Error fetching data');
  }
}