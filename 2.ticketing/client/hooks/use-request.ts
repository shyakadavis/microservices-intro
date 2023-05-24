import { useToast } from '@/components/ui/use-toast';
import { SignUpFormValues } from '@/pages/auth/signup';
import axios from 'axios';

type Params = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  body?: SignUpFormValues | {};
  onSuccess: () => void;
};

type Error = {
  message: string;
  field?: string;
};

export default function useRequest({ url, method, body, onSuccess }: Params) {
  const { toast } = useToast();

  const doRequest = async (props = {}) => {
    try {
      await axios[method](url, { ...body, ...props });
      toast({
        title: 'Success',
        description: 'Request successful',
      });
      onSuccess();
    } catch (error: any) {
      error.response.data.errors.forEach((err: Error) => {
        toast({
          title: 'Error',
          description: err.message,
          variant: 'destructive',
        });
      });
    }
  };

  return { doRequest };
}
