import { FC } from 'react';

interface ErrorMessage {
	message: string;
}

const ErrorForm: FC<ErrorMessage> = ({message}: ErrorMessage) => {
  return (
    <div>
        Error: {message}
    </div>
  );
}

export default ErrorForm;