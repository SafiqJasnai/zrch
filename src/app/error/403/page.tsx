'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const Unauthorized = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md w-full mx-4 shadow-lg">
        <CardContent>
          <div className="text-center">
            <CardHeader className="mb-4">
              Unauthorized Access
            </CardHeader>
            <CardDescription className="mb-4">
              You do not have permission to view this page. Please log in to continue.
            </CardDescription>
            <Button color="primary" onClick={handleGoBack}>
              Go to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unauthorized;